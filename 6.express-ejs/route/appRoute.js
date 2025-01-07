// define express router
const appRoute = require('express').Router()

// import all controllers
const { homeController, addController, addUser, readAll } = require("../controller/appController")

appRoute.get(`/`, homeController)
appRoute.get(`/add/user`, addController)

//post route
appRoute.post(`/api/user/add`, addUser)

// read all users
appRoute.get(`/api/user/all`, readAll)


// default export
module.exports = appRoute;