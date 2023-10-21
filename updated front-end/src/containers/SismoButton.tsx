import {
  SismoConnectButton,
  SismoConnectResponse,
} from '@sismo-core/sismo-connect-react';
import { Spinner } from 'flowbite-react';
import { useState } from 'react';

import { usePolygonIdLoginStore } from '@/store/polygonIdLogin';

import {
  AUTHS,
  CLAIMS,
  CONFIG,
  SIGNATURE_REQUEST,
} from '@/configs/sismo-connect-config';

export default function SismoButton() {
  const [pageState, setPageState] = useState<string>('init');
  const [error, setError] = useState<string>('');
  const { setIsLogin } = usePolygonIdLoginStore();

  if (pageState == 'verifying') {
    return (
      <div className='fixed bottom-0 left-0 right-0 top-0 z-10 bg-slate-800'>
        <div className=' absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
          <Spinner className='mx-auto my-auto' aria-label='loading' size='xl' />
        </div>
      </div>
    );
  }

  return (
    <div>
      {pageState == 'init' ? (
        <>
          <SismoConnectButton
            overrideStyle={{
              background: '#1984c7',
              width: '100%',
              fontSize: '14px',
              paddingTop: '10px',
              paddingBottom: '10px',
              height: '40px',
            }}
            config={CONFIG}
            // Auths = Data Source Ownership Requests. (e.g Wallets, Github, Twitter, Github)
            auths={AUTHS}
            // Claims = prove group membership of a Data Source in a specific Data Group.
            // (e.g ENS DAO Voter, Minter of specific NFT, etc.)
            // Data Groups = [{[dataSource1]: value1}, {[dataSource1]: value1}, .. {[dataSource]: value}]
            // Existing Data Groups and how to create one: https://factory.sismo.io/groups-explorer
            claims={CLAIMS}
            // Signature = user can sign a message embedded in their zk proof
            signature={SIGNATURE_REQUEST}
            // text='Prove With Sismo'
            text='Sign in with Sismo'
            // Triggered when received Sismo Connect response from user data vault
            onResponse={async (response: SismoConnectResponse) => {
              setPageState('verifying');
              const verifiedResult = await fetch('/api/verify', {
                method: 'POST',
                body: JSON.stringify(response),
              });
              const data = await verifiedResult.json();
              if (verifiedResult.ok) {
                setPageState('verified');
                setIsLogin(true);
              } else {
                setPageState('error');
                setError(data);
              }
            }}
          />
        </>
      ) : (
        <>
          <button
            onClick={() => {
              window.location.href = '/';
            }}
          >
            {' '}
            RESET{' '}
          </button>
          <br></br>
          <div className='status-wrapper'>
            {pageState == 'verifying' ? (
              <span className='verifying'> Verifying ZK Proofs... </span>
            ) : (
              <>
                {error ? (
                  <span className='error'>
                    {' '}
                    Error verifying ZK Proofs: {error}{' '}
                  </span>
                ) : (
                  <span className='verified'> ZK Proofs verified!</span>
                )}
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
}
