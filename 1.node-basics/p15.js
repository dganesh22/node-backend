// path module

const path = require('path')

console.log(`path sep =`, path.sep) // index path

// join path
const filePath = path.join("/api", "users", "all", "users.json")
console.log(`filepath = `, filePath)

// base path
const basePath = path.basename(filePath)
console.log(`basepath = `, basePath)

// absolute path
const abs = path.resolve(__dirname, "home", "files", "products.json")
console.log(`absolute path`, abs)