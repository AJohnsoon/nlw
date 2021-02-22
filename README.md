# Next Level Week

NLW - DEV environment configuration

**to configure (from scratch):**<br> 
```ts
yan add typescript
yarn tsc --init
yarn add ts-node-dev -D
```
---
*add in **package.json***
```json
    "scripts": {
        "dev": "ts-node-dev src/server.ts"
    }
```
---
or when *cloning:*
```<br>
  use "yarn" or "npm install"
```