// async write
const data = "All file system operations have synchronous, callback, and promise-based forms, and are accessible using both CommonJS syntax and ES6 Modules (ESM)";

const fs = require('fs')

// async write
fs.writeFile("./write.txt", data, function (err) {
    if (err) throw err
    console.log(`async file write completed`)
})