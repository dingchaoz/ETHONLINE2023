import { ethers } from 'ethers';

export const dataId = ethers.encodeBytes32String(`t${Date.now()}`);
export const dataPayload = ethers.encodeBytes32String(`t${Date.now()}`);
