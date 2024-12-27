const assert = require('assert')

const x = [
    {
        name: "mary"
    }
]

const y = {
    name: "mary"
}

const z = [
    {
        name: "mary"
    }
]

// assert.deepStrictEqual(x, z)
assert.deepStrictEqual(x, y) // error