const express = require('express')
const port = 5623

const app = express()

// get - read
app.get(`/`, function (req, res) {
    res.send({ msg: "home controller" })
})

// post - create
app.post(`/api/user/add`, function (req, res) {
    res.send({ msg: "add new user " })
})

// put/patch - update
app.put(`/api/user/update/:id`, function (req, res) {
    res.send({ msg: "update all user data" })
})

// delete
app.delete(`/api/user/delete/:id`, function (req, res) {
    res.send({ msg: 'user delete ' })
})

// all - default route
app.all(`/*`, function (req, res) {
    res.send({ msg: "requsted path not found" })
})

app.listen(port, () => {
    console.log(`server is running @ http://localhost:${port}`)
})