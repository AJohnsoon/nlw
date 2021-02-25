# Next Level Week

`DEV environment configuration`

When *cloning* USE:
```ts
  "yarn" or "npm install"
```
to *create*:
```ts
  yan add typescript
  yarn tsc --init
  yarn add ts-node-dev -D
```
Configure ***package.json***
```json
  "scripts": {
    "dev": "ts-node-dev src/server.ts",
  }
```
and execute:  
```ts
  "yarn dev"
``` 



---
`Database environment configuration`
  ```
    yarn add typeorm reflect-metadata 
    yarn add sqlite3
  ```
  * library TS to generate ID 
    ```ts
      yarn add uuid
      yarn add @types/uuid -D
    ```
*add in **package.json***

```json
   "scripts": {
      "dev": "ts-node-dev --transpile-only --ignore-watch node_modules src/server.ts",
      "typeorm": "ts-node-dev node_modules/typeorm/cli.js",
      "test": "cross-env NODE_ENV=test jest",
      "posttest": "rm ./src/database/database.test.sqlite"
  },
```

*add or config **ormconfig.json*** `for ORM`
  ```json    
    {
      "type": "sqlite",
      "database": "./src/database/database.sqlite",
      "migrations": ["./src/database/migrations/**.ts"],
      "entities": ["./src/models/**.ts"],
      "logging": true,
      "cli":{
        "migrationsDir": "./src/database/migrations"
        }
    }  
```

```ts
for 'create/run' migration use:
create users:
  `yarn typeorm migrations:create -n CreateUsers`

run all:
  `yarn typeorm migration:run`

reset last:
  `yarn typeorm migration:revert`
```
---



`for Test environment`
```
  yarn add jest @types/jest -D
  yarn jest --init
  yarn add ts-jest -D
  yarn add supertest @types/supertest -D
```


```
 yarn add nodemailer
 yarn add @types/nodemailer -D
```

```
yarn add handlebars
```