[![npm version](https://img.shields.io/npm/v/starling-verifier.svg?color=green)](https://www.npmjs.com/package/starling-verifier)
[![Buy me a coffee][buymeacoffee-shield]][buymeacoffee]

# starling-verifier

A simple [express](https://github.com/expressjs/express) middleware that throws an Error if a webhook signature is invalid, with bodyParser built in.

## Installation

```bash
> npm i --save starling-verifier
```

## Usage

```javascript
const express = require("express");
const app = express();
const starlingVerifierMiddleware = require('starling-verifier')
const stlng = starlingVerifierMiddleware(PROCESS.ENV.STARLING_WEBHOOK_SECRET)
app.use(stlng)

app.post('/starlingWebhook', async (request,response)=>{
    ...
}
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)

[buymeacoffee-shield]: https://www.buymeacoffee.com/assets/img/guidelines/download-assets-sm-2.svg
[buymeacoffee]: https://www.buymeacoffee.com/smashah