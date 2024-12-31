// template sms emails 

let util = require('util')

// template
let msgTemplate = `Hi %s, welcome to %s and we wish happy new year %d.`

let p1 = util.format(msgTemplate, "Abhishek", "Nodejs", 2025)
let p2 = util.format(msgTemplate, "John", "Reactjs", 2025)

console.log(`user =`, p1)
console.log(`user =`, p2)