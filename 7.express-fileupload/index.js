const express = require('express')
require('dotenv').config()

const cors = require('cors')
const { StatusCodes } = require('http-status-codes')

const PORT = process.env.PORT

const app = express()

// body parser
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(cors())

app.set('view engine', 'ejs')
app.set("views", "./view")

app.use(`/`, require('./route/fileRoute'))

app.all('/*', async (req, res) => {
    try {
        res.json({ msg: "requsted path not found" })
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
    }
})

app.listen(PORT, () => {
    console.log(`server is running @ http://localhost:${PORT}`)
})