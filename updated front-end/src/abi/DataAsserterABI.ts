export const DataAsserterABI = [
  {
    inputs: [
      { internalType: 'address', name: '_defaultCurrency', type: 'address' },
      { internalType: 'address', name: '_optimisticOracleV3', type: 'address' },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'dataId',
        type: 'bytes32',
      },
      {
        indexed: false,
        internalType: 'bytes32',
        name: 'data',
        type: 'bytes32',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'asserter',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'assertionId',
        type: 'bytes32',
      },
    ],
    name: 'DataAsserted',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'dataId',
        type: 'bytes32',
      },
      {
        indexed: false,
        internalType: 'bytes32',
        name: 'data',
        type: 'bytes32',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'asserter',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'assertionId',
        type: 'bytes32',
      },
    ],
    name: 'DataAssertionResolved',
    type: 'event',
  },
  {
    inputs: [
      { internalType: 'bytes32', name: 'dataId', type: 'bytes32' },
      { internalType: 'bytes32', name: 'data', type: 'bytes32' },
      { internalType: 'address', name: 'asserter', type: 'address' },
    ],
    name: 'assertDataFor',
    outputs: [
      { internalType: 'bytes32', name: 'assertionId', type: 'bytes32' },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'bytes32', name: 'assertionId', type: 'bytes32' }],
    name: 'assertionDisputedCallback',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'assertionLiveness',
    outputs: [{ internalType: 'uint64', name: '', type: 'uint64' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'bytes32', name: 'assertionId', type: 'bytes32' },
      { internalType: 'bool', name: 'assertedTruthfully', type: 'bool' },
    ],
    name: 'assertionResolvedCallback',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
    name: 'assertionsData',
    outputs: [
      { internalType: 'bytes32', name: 'dataId', type: 'bytes32' },
      { internalType: 'bytes32', name: 'data', type: 'bytes32' },
      { internalType: 'address', name: 'asserter', type: 'address' },
      { internalType: 'bool', name: 'resolved', type: 'bool' },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'defaultCurrency',
    outputs: [{ internalType: 'contract IERC20', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'defaultIdentifier',
    outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'bytes32', name: 'assertionId', type: 'bytes32' }],
    name: 'getData',
    outputs: [
      { internalType: 'bool', name: '', type: 'bool' },
      { internalType: 'bytes32', name: '', type: 'bytes32' },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'oo',
    outputs: [
      {
        internalType: 'contract OptimisticOracleV3Interface',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];
