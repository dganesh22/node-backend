const fs = require('fs')

// synchronous 

if (fs.existsSync('./write1.txt')) {
    fs.unlinkSync('./write1.txt')
    console.log(`file deleted`)
} else {
    console.log(`no such file in directory`)
}