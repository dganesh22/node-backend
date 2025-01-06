// define express router
const appRoute = require('express').Router()

// import all controllers
const { homeController, addController } = require("../controller/appController")

appRoute.get(`/`, homeController)
appRoute.get(`/add/user`, addController)


// default export
module.exports = appRoute;