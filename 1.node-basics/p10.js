// dgram -> used for communication  through UDP protocol

// user defined protocol 4 / 6

// listener 
const dgram = require('dgram')
const socket = dgram.createSocket("udp4")
const port = 3499

// node event => on(name,callback)
socket.on("message", function (msg, err) {
    if (err) console.log(err)
    console.log(`message = `, msg.toString())
});

// port
socket.bind(port)