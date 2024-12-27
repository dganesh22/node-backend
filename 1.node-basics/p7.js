//buffer module -> stores the data in ascii format

// safe memory
let buf = Buffer.alloc(5)
console.log(`safe memory =`, buf)

// unsafe memory
let buf2 = Buffer.allocUnsafe(5)
console.log(`unsafe memory =`, buf2)

// ASCII values
let buf3 = Buffer.from("Abhishek")
console.log(`ascii =`, buf3)// hex
console.log(`string = `, buf3.toString()) // return string format

console.log(`\n`)

// concat the buffer
let a1 = Buffer.from("Welcome to ")
let a2 = Buffer.from("nodejs backend")

let res = [a1, a2]
let out = Buffer.concat(res)
console.log(`out =`, out)
console.log(`out =`, out.toString())