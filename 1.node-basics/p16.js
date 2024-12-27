// fs => file system

const fs = require('fs')

console.log(`file read started`)

const first = fs.readFileSync('./first.txt')

console.log(`file content =`, first)
console.log(`file content =`, first.toString())

fs.writeFileSync("./data.txt", `Here is my content\n\n ${first}`)

console.log(`file write completed`)