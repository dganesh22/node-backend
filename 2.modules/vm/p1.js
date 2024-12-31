const vm = require('vm')

// virtual memory

let user = {
    name: "john",
    age: 23,
    city: "bengaluru"
}

console.log(`before = `, user)

vm.createContext(user) // virtual object
vm.runInContext(`name="sam";age+=4;city="mumbai"`, user)

console.log(`after =`, user)