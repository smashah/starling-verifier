const bodyParser = require('body-parser');
const crypto = require('crypto');

const starlingVerifierMiddleware = secret => bodyParser.json({
  verify: (req, res, buf) => {
  let hash = crypto.createHash('sha512');
  hash.update(secret+buf);
  const sigCheck = hash.digest('base64');
  const valid = sigCheck==req.headers['x-hook-signature'];
  if(!valid) throw new Error('Signature is invalid') 
  }
});

module.exports = starlingVerifierMiddleware