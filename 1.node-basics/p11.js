// sender 

const dgram = require('dgram')
const socket = dgram.createSocket('udp4')
const port = 3499

let msg = Buffer.from("hi abhishek,welcome to node js")

socket.send(msg, port, "localhost")

console.log(`data successfully sent`)