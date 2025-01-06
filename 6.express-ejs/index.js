const express = require('express')
// configure environment module
require('dotenv').config()
const cors = require('cors') // middleware -> cross origin resource sharing
const { defaultController } = require('./controller/appController')

const port_num = process.env.PORT

// instance of express
const app = express()


// view folder as static
app.use(express.static('./view'))

// configure template engines
app.set("view engine", "ejs")
app.set("views", "./view")


// // home controller
// app.get(`/`, async (req, res) => {
//     try {
//         res.json({ msg: `welcome to expressjs` })
//     } catch (error) {
//         console.log(error.message)
//     }
// })

// to link route
app.use(`/`, require('./route/appRoute'))

// default controller 
app.all(`/*`, defaultController)

// server listener
app.listen(port_num, () => {
    console.log(`server is running @ http://localhost:${port_num}`)
})