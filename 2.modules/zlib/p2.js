const zlib = require('zlib')
const fs = require('fs')

let gzip = zlib.createUnzip()

let r = fs.createReadStream('test.gz')
let w = fs.createWriteStream('output.txt')

// exe - read > unzip > write
r.pipe(gzip).pipe(w)

console.log(`unzip completed`)