# TypeScript NodeJs Express appliction

 Backend app 

## copy local src of app

```bash
git clone https://github.com/alexxsub/express_template.git
```

## Install MongoDB

see manual (https://docs.mongodb.com/manual/installation/)

## Install the dependencies

```bash
cd express_template
npm i
```

### Configure your app in .env, for example

```bash

PORT = 4001

```

## Configure via edit json file

```bash

configs
 |-development.json
 |-production.json
 |-test.json

```

### Start the backend app in development mode (hot-code reloading, error reporting, etc.)

```bash
npm run dev
```

### Build and start the backend app in production mode

```bash
npm run start
```

### Build the app for production

```bash
npm run build
```

### Lint the files or fix

```bash
npm run lint
```

```bash
npm run lint:fix
```

### Run tests

```bash
npm run test
```
### Deploy app for pm2 (configure ecosystem.config.js)

```bash
npm run deploy:prod
```
```bash
npm run deploy:dev
```


 
