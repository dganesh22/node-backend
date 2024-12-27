// built in modules of nodejs

// assert module -> handle the run time errors (exceptions)

// import
const assert = require('assert')

let con = 10 > 30
console.log(`condition = `, con)

console.log(`assert = `, assert(con)) // throws a run time error