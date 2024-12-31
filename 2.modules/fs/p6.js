const fs = require('fs')

// sync append 
const data = "\n\n Asynchronously append data to a file, creating the file if it does not exist";

fs.appendFileSync('./write1.txt', data)

console.log(`file append completed`)
