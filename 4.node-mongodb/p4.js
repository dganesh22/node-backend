const mongo = require('mongodb')
const assert = require('assert')

// url  - mongodb://localhost:27017
const URL = "mongodb://127.0.0.1:27017"
const dbname = "userdb"

const client = new mongo.MongoClient(URL)

async function main() {
    await client.connect();
    console.log(`mongodb connected`)
    const db = client.db(dbname)
    const coll = db.collection('users')

    await coll.updateOne({ email: "john@gmail.com" }, {
        $set: {
            name: "mary",
            email: "mary@gmail.com",
            age: 20,
            isUser: true
        }
    })

    return "...done";
}

main().then(res => {
    console.log(res)
}).catch(err => {
    assert.deepStrictEqual(err, null)
})