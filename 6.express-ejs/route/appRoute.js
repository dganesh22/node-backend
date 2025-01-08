// define express router
const appRoute = require('express').Router()

// import all controllers
const { homeController, addController, addUser, readAll, editUser, userUpdate, userDelete } = require("../controller/appController")

appRoute.get(`/`, homeController)
appRoute.get(`/add/user`, addController)

//post route
appRoute.post(`/api/user/add`, addUser)

// read all users
appRoute.get(`/api/user/all`, readAll)

// edit user 
appRoute.get(`/edit/user/:id`, editUser)

// update user
appRoute.patch(`/api/user/update/:id`, userUpdate)

// delete user
appRoute.delete(`/api/user/delete/:id`, userDelete)


// default export
module.exports = appRoute;