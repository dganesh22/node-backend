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

    // sql query to delete the value of the table

    let str = `DELETE FROM users WHERE id=3`;

    // exe
    connStr.query(str, function (err, data) {
        if (err) assert.deepStrictEqual(err, null)
        console.log(`data deleted`)
    })
})

