// to connect mysql db
const mysql = require('mysql')
const assert = require('assert')

// connection string
let connStr = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: ""
})

// connection logic
connStr.connect(function (err) {
    if (err) assert.deepStrictEqual(err, null)
    console.log(`mysql db connected`)

    // sql query
    let str = `CREATE DATABASE userdb`

    // exe 
    connStr.query(str, function (err, data) {
        if (err) assert.deepStrictEqual(err, null)
        console.log(`database created`)
    })
})

