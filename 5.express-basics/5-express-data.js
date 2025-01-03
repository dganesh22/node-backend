const express = require('express')
const users = require('./data/users')

const port = 5524;

const app = express()

app.get(`/`, (req, res) => {
    res.status(200).json({ msg: "welcome to express api" })
})

// read all users
app.get(`/api/users`, (req, res) => {
    res.status(200).json({ length: users.length, users })
})

// read single user
app.get(`/api/users/:id`, (req, res) => {
    // :router-params
    let params = req.params
    let single = users.find(item => item.id == params.id)

    res.json({ params, user: single })
})

// query
app.get(`/api/user/single`, (req, res) => {
    let query = req.query;
    res.json({ query })
})

app.all(`/*`, (req, res) => {
    res.status(404).json({ msg: "requested path not found" })
})

app.listen(port, () => {
    console.log(`server is running @ http://localhost:${port}`)
})