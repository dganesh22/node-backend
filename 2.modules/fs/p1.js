// async read 

let fs = require('fs')

fs.readFile('./test.txt', function (err, data) {
    if (err) throw err;
    console.log(`data = `, data) // buffer
    console.log(`string =`, data.toString())
})