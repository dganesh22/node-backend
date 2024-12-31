// append file operation
const fs = require('fs')

// async append 
const data = "\n\n Asynchronously append data to a file, creating the file if it does not exist";

fs.appendFile('./write.txt', data, function (err) {
    if (err) throw err;
    console.log(`file append completed`)
})