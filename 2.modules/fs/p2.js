// sync read operation
let fs = require('fs')

let data = fs.readFileSync('./test.txt')

console.log(`sync read data =`, data)
console.log(`sync read data =`, data.toString())