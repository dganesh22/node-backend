const { StatusCodes } = require('http-status-codes')


const home = async (req, res) => {
    try {
        res.render('index.ejs')
    } catch (err) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
    }
}

const uploadFile = async (req, res) => {
    try {
        res.render('upload.ejs')
    } catch (err) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
    }
}

module.exports = { home, uploadFile }