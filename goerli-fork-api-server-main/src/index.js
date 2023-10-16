const express = require('express')
const dotenv = require('dotenv')
const { ethers, Wallet, encodeBytes32String, decodeBytes32String } = require('ethers')
const { execSync } = require('child_process');

const app = express()
const port = 3000
dotenv.config()
const { MNEMONIC, RPC_URL, DATA_ASSERTER, OOV3_ADDRESS } = process.env;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/api/faucet', async (req, res) => {
    const { to } = req.body;
    if (!to) {
        res.status(400).send('to is required')
    }
    const provider = new ethers.JsonRpcProvider(RPC_URL)


    const hdNodeWallet = Wallet.fromPhrase(MNEMONIC, provider);

    await hdNodeWallet.sendTransaction({value: ethers.parseEther('0.1'), to})
    res.send({
        ok: true
    });
})

app.post('/api/evm_increaseTime', (req, res) => {
    execSync(`cast rpc --rpc-url ${RPC_URL} evm_increaseTime 7200`)
    execSync(`cast rpc --rpc-url ${RPC_URL} evm_mine`)

    res.send({
        ok: true
    })
})

app.get('/api/data_id', (req, res) => {
    const { uri } = req.query;
    if (!uri) {
        res.status(400).send('uri is required')
    }
    const dataId = encodeBytes32String(uri)
    res.send({
        dataId
    })
})
app.get('/api/data', (req, res) => {
    const { data } = req.query;
    if (!data) {
        res.status(400).send('data is required')
    }
    const bytes32Data = encodeBytes32String(data)
    res.send({
        data: bytes32Data
    });
})

app.get('/api/data_asserter', (req, res) => {
    res.send({
        dataAsserter: DATA_ASSERTER
    })
})

app.post('/api/assert', (req, res) => {
    const { dataId, data } = req.body;
    if (!dataId) {
        res.status(400).send('dataId is required')
    }
    if (!data) {
        res.status(400).send('data is required')
    }
    const exec = execSync(`cast send --json \\
                \t--rpc-url ${RPC_URL} \\
                \t--mnemonic "${MNEMONIC}" --mnemonic-index 1 \\
                \t${DATA_ASSERTER} \\
                \t"assertDataFor(bytes32,bytes32,address)" ${dataId} ${data} ${DATA_ASSERTER}`
    )
    const response = JSON.parse(exec.toString('utf8'))
    res.send(response)

})
app.get('/api/assertion_id', (req, res) => {
    const { assertion_tx } = req.query;
    if (!assertion_tx) {
        res.status(400).send('assertion_tx is required')
    }
    const exec = execSync(`cast receipt --rpc-url ${RPC_URL} --json ${assertion_tx}`)
    const response = JSON.parse(exec.toString('utf8'))
    res.send(response)
})
app.post('/api/settle', (req, res) => {
    const { assertion_id } = req.body;
    if (!assertion_id) {
        res.status(400).send('assertion_id is required')
    }
    execSync(`cast send --rpc-url ${RPC_URL} --mnemonic "${MNEMONIC}" ${OOV3_ADDRESS} "settleAssertion(bytes32)" ${assertion_id}`)
    res.send({
        ok: true
    })
})

app.get('/api/assertion_data', (req, res) => {
    const { assertion_id } = req.query;
    if (!assertion_id) {
        res.status(400).send('assertion_id is required')
    }
    const exec = execSync(`cast --abi-decode "assertionsData(bytes32)(bytes32,bytes32,address,bool)" \
	$(cast call --rpc-url ${RPC_URL}  ${DATA_ASSERTER} "assertionsData(bytes32)" ${assertion_id})`)
    const response = exec.toString('utf8')
    res.send(response.split('\n'))
})
app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
