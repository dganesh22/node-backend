const crypto = require('crypto')

const hash = crypto.createHash('sha256') // sha = secure hash algo 256/512

let input = "Welcome to nodejs";

let data = hash.update(input).digest('base64url')  // base64,base64url,binary,hex

console.log(`encrypted =`, data)