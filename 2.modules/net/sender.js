const net = require('net')

const server = net.createServer(function (socket) {
    socket.end("Abhishek, Wish you a happy 2025")
})

// exception handler
server.on('error', function (err) {
    if (err) throw err
})

// server start
server.listen(() => {
    let addr = server.address()
    console.log(`server port %j `, addr)
})