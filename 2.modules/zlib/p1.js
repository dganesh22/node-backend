const zlib = require('zlib')
const fs = require('fs')

let gzip = zlib.createGzip()

let r = fs.createReadStream('data.txt')
let w = fs.createWriteStream('test.gz')

// exe - read > zip > write
r.pipe(gzip).pipe(w)

console.log(`zip file completed`)