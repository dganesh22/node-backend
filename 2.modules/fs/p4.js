// sync write
const data = "All file system operations have synchronous, callback, and promise-based forms, and are accessible using both CommonJS syntax and ES6 Modules (ESM)";

const fs = require('fs')

// sync write
fs.writeFileSync("./write1.txt", data)

console.log(`sync file write completed`)
