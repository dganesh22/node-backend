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

    // sql query to create table id (primary), name , email , address, age

    let str = `CREATE TABLE users(id INT(100) AUTO_INCREMENT, name VARCHAR(120) NOT NULL, email VARCHAR(100) NOT NULL, age INT(30) NOT NULL, PRIMARY KEY(id))`;

    // exe
    connStr.query(str, function (err, data) {
        if (err) assert.deepStrictEqual(err, null)
        console.log(`table created`)
    })
})

