import { Injectable } from '@nestjs/common';
import {
  CheckAvatarStatusDto,
  GetPayloadDto,
  GetTwitterPayloadDto,
  VerifyProofDto,
} from './dto/next-dot-id.dto';
import { firstValueFrom } from 'rxjs';
import { HttpService } from '@nestjs/axios';
import { ecsign, toRpcSig, keccakFromString } from 'ethereumjs-util';
import { randomBytes } from 'crypto';
import * as secp256k1 from 'secp256k1';

@Injectable()
export class ProofService {
  constructor(private readonly httpService: HttpService) {}

  async getKeyPair() {
    let privKey;
    do {
      privKey = randomBytes(32);
    } while (!secp256k1.privateKeyVerify(privKey));

    const pubKey = secp256k1.publicKeyCreate(privKey);

    return {
      privateKey: privKey.toString('hex'),
      publicKey: Array.from(pubKey)
        .map((byte) => byte.toString(16).padStart(2, '0'))
        .join(''),
    };
  }

  async getPayload(dto: GetPayloadDto) {
    const response = await firstValueFrom(
      this.httpService.post(
        `https://proof-service.next.id/v1/proof/payload`,
        dto,
      ),
    );

    return response.data;
  }

  async getTwitterPayload(dto: GetTwitterPayloadDto) {
    const { privateKey, ...body } = dto;
    const response = await firstValueFrom(
      this.httpService.post(`https://proof-service.next.id/v1/proof/payload`, {
        ...body,
        platform: 'twitter',
      }),
    );
    const signature = await this.getSignature(
      response.data.sign_payload,
      privateKey,
    );

    response.data.post_content.default =
      response.data.post_content.default.replace('%SIG_BASE64%', signature);
    response.data.post_content.en_US = response.data.post_content.en_US.replace(
      '%SIG_BASE64%',
      signature,
    );
    response.data.post_content.zh_CN = response.data.post_content.zh_CN.replace(
      '%SIG_BASE64%',
      signature,
    );

    return response.data;
  }

  async verifyProof(dto: VerifyProofDto) {
    const response = await firstValueFrom(
      this.httpService.post(`https://proof-service.next.id/v1/proof`, dto),
    );

    return response.data;
  }

  async checkAvatarStatus(dto: CheckAvatarStatusDto) {
    const response = await firstValueFrom(
      this.httpService.get(`https://proof-service.next.id/v1/proof`, {
        params: dto,
      }),
    );

    return response.data;
  }

  async personalSign(message: Buffer, privateKey: Buffer): Promise<Buffer> {
    const messageHash = keccakFromString(
      `\x19Ethereum Signed Message:\n${message.length}${message}`,
      256,
    );
    const signature = ecsign(messageHash, privateKey);
    return Buffer.from(
      toRpcSig(signature.v, signature.r, signature.s).slice(2),
      'hex',
    );
  }

  async getSignature(signPayload: string, privateKey: string) {
    // this message come from the return attribute "sign_payload" of everytime calling API: v1/proof/payload
    const message = Buffer.from(signPayload);
    // ATTENTION! RUN THIS LOCALLY! NEVER SHARE YOUR PRIVATE KEY WITH ANY OTHERS OR PUBLIC!
    // replace XXX with your own Private Key for generating a signature
    const secretKey = Buffer.from(privateKey, 'hex');
    const signature = await this.personalSign(message, secretKey);

    // console.log(`Signature: 0x${signature.toString('hex')}`);
    // For demo ONLY
    // Signature: 0xf72fe6b00be411bd70ffe1b9bf322f18529ea10e9559dd26ba10387544849fc86d712709dfb709efc3dcc0a01b6f6b9ca98bd48fe780d58921f4926c6f2c0b871b

    // console.log(`Signature(base64): ${signature.toString('base64')}`);
    // For demo ONLY
    // Signature(base64): 9y/msAvkEb1w/+G5vzIvGFKeoQ6VWd0muhA4dUSEn8htcScJ37cJ78PcwKAbb2ucqYvUj+eA1Ykh9JJsbywLhxs=

    return signature.toString('base64');
  }
}
