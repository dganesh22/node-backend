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

    // sql query to drop the table

    let str = `DROP DATABASE userdb`;

    // exe
    connStr.query(str, function (err, data) {
        if (err) assert.deepStrictEqual(err, null)
        console.log(`db dropped successfully`)
    })
})

