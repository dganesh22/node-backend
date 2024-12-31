// hmac = hash based message authentication code

let crypto = require('crypto')

let hash = crypto.createHmac('sha256', 'test123')

let input = "welcome to nodejs"

let res = hash.update(input).digest('base64')

console.log(`output =`, res)