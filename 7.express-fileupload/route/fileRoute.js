const fileRoute = require('express').Router()
const { home, uploadFile } = require('../controller/fileController')

fileRoute.get(`/`, home)
fileRoute.get(`/upload`, uploadFile)

module.exports = fileRoute