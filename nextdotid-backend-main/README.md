# nextdotid backend

## Usage

### Install

```
npm install
```

### Start

```
npm run start:dev
```

## Flow

### 1. Get key pair

request

```
GET /v1/proof/key-pair
```

response

```
{
  "privateKey": "e12bf3da4ccd83e8f9554fef70f76f36539c7910bf747c31b4f165527a5a2c73",
  "publicKey": "023dbd5c7a06a03589080c7aa48876e55fbc52963ebb79b65cc719bd1fa2b437ca"
}
```

### 2. Get a twitter payload

request

```
POST /v1/proof/payload/twitter

{
  "privateKey": "<privateKey>", // from step 1
  "action": "create",
  "identity": "<twitterHandle>",
  "public_key": "<publicKey>" // from step 1
}
```

response

```
{
  "post_content": {
    "default": "🎭 Verify @<twitterHandle> with @NextDotID.\nSig: ISNu7T1PEw45o0sRA3eFuXZw0MdlT0UGG/igypsqD7dTaw14MGZSZ2ppK9ORBCeXYq9F9JuPN9fwz2BkDdwa+Bw=\nMisc: 752782f3-1de0-4fea-a529-a63592d61d61|1697421385|",
    "en_US": "🎭 Verify @<twitterHandle> with @NextDotID.\nSig: ISNu7T1PEw45o0sRA3eFuXZw0MdlT0UGG/igypsqD7dTaw14MGZSZ2ppK9ORBCeXYq9F9JuPN9fwz2BkDdwa+Bw=\nMisc: 752782f3-1de0-4fea-a529-a63592d61d61|1697421385|",
    "zh_CN": "🎭 由 @NextDotID 验证 @<twitterHandle> 。\nSig: ISNu7T1PEw45o0sRA3eFuXZw0MdlT0UGG/igypsqD7dTaw14MGZSZ2ppK9ORBCeXYq9F9JuPN9fwz2BkDdwa+Bw=\n其它信息: 752782f3-1de0-4fea-a529-a63592d61d61|1697421385|"
  },
  "sign_payload": "{\"action\":\"create\",\"created_at\":\"1697421385\",\"identity\":\"<twitterHandle>\",\"platform\":\"twitter\",\"prev\":null,\"uuid\":\"752782f3-1de0-4fea-a529-a63592d61d61\"}",
  "uuid": "01052203-1c49-4873-9a47-c7b8be5bc67a",
  "created_at": "1697131856"
}
```

### 3. Post a proof Tweet

Posting the content from `post_content.default` in the response and ensuring correct line breaks.

Then go to the detail page of this tweet, get its ID at the end of the URL like `1543541274254639104`:

```
https://twitter.com/<twitterHandle>/status/1543541274254639104
```

### 4. Verify the proof

request

```
POST /v1/proof/

{
  "action": "create",
  "platform": "twitter",
  "identity": "<twitterHandle>",
  "public_key": "<publicKey>" // from step 1
  "proof_location": "<tweetId>", // from step 3
  "extra": {},
  "uuid": "<uuid>", // from step 2
  "created_at": "<created_at>" // from step 2
}
```

response

```
{}
```

### 5. Check your Avatar's status

request

```
GET /v1/proof/
```

response

```
{
  "pagination": {
    "total": 2,
    "per": 40,
    "current": 1,
    "next": 0
  },
  "ids": [
    {
      "persona": "<publicKey>",
      "avatar": "<publicKey>",
      "last_arweave_id": "",
      "activated_at": "<created_at>",
      "proofs": [
        {
          "platform": "twitter",
          "identity": "<twitterHandle>",
          "alt_id": "1712520854435934208",
          "created_at": "1697421588",
          "last_checked_at": "1697421588",
          "is_valid": true,
          "invalid_reason": ""
        }
      ]
    }
  ]
}
```

## Ref

https://docs.next.id/getting-started/twitter-wallet-binding
