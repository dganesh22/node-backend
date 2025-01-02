// to connect mysql db
const mysql = require('mysql')
const assert = require('assert')

// connection string
let connStr = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "userdb"
})

// connection logic
connStr.connect(function (err) {
    if (err) assert.deepStrictEqual(err, null)
    console.log(`mysql db connected`)

    // sql query to insert the values
    let data = [
        ["Henry", "henry@gmail.com", 22],
        ["Sam", "sam@gmail.com", 21],
        ["Arnav", "arnav@gmail.com", 23],
    ]

    let str = `INSERT INTO users(name,email,age) VALUES ?`;

    // exe
    connStr.query(str, [data], function (err, data) {
        if (err) assert.deepStrictEqual(err, null)
        console.log(`values inserted successfully`)
    })
})

