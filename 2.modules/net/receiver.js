const net = require('net')

const client = net.connect({ port: 58619 }, function () {
    console.log(`connected to server`)
})

// receive data
client.on('data', function (msg) {
    console.log(`msg =`, msg.toString())
})

// end of connection
client.on("end", () => {
    console.log(`server disconnected`)
})