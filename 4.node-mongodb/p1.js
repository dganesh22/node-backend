const mongo = require('mongodb')
const assert = require('assert')

// url  - mongodb://localhost:27017
const URL = "mongodb://127.0.0.1:27017"
const dbname = "userdb"

const client = new mongo.MongoClient(URL)

let data = [
    {
        name: "john",
        email: "john@gmail.com",
        age: 24,
        isUser: true
    },
    {
        name: "henry",
        email: "henry@gmail.com",
        age: 22,
        isUser: false
    },
    {
        name: "tom",
        email: "tom@gmail.com",
        age: 21,
        isUser: true
    }
]

async function main() {
    await client.connect();
    console.log(`mongodb connected`)

    // select db
    const db = client.db(dbname)
    await db.createCollection("users")
    const coll = db.collection("users");
    await coll.insertMany(data)

    return "...done";
}

main().then(res => {
    console.log(res)
}).catch(err => {
    assert.deepStrictEqual(err, null)
})