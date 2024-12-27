// node events and event emitter

const EventEmitter = require('events')

// instance 
let x = new EventEmitter()

// instance.on(name,callback)
x.on("product", function (x, y) {
    console.log(`product = `, x * y)
});

// instance.on(name,callback)
x.on("sum", function (a, b) {
    console.log(`sum =`, a + b)
})

// event call 
// instance.emit(name)

x.emit('product', 10, 5)
x.emit('product', 22, 5)

x.emit('sum', 20, 40)
