// async file delete

const fs = require('fs')

fs.unlink('./write.txt', function (err) {
    if (err) throw err;
    console.log(`file deleted`)
})