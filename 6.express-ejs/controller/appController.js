
const User = require('../model/userModel')
// rendering index.ejs

const homeController = async (req, res) => {
    try {
        let users = await User.find()

        res.render('index.ejs', { users })
    } catch (err) {
        res.status(500).json({ msg: err.message })
    }
}
const addController = async (req, res) => {
    try {
        res.render('adduser.ejs')
    } catch (err) {
        res.status(500).json({ msg: err.message })
    }
}


// add user
const addUser = async (req, res) => {
    try {
        const data = req.body

        // weather user exists or not
        let exUser = await User.findOne({ email: data.email })
        if (exUser)
            return res.status(400).json({ msg: `email ${data.email} already registered` })

        let newUser = await User.create(data)

        res.json({ msg: "new user registered", user: newUser })

    } catch (err) {
        res.status(500).json({ msg: err.message })
    }
}

//edit user
const editUser = async (req, res) => {
    try {
        let id = req.params.id

        // read user info
        let exUser = await User.findById(id)
        if (!exUser) {
            return res.render("update.ejs", { msg: "user info not found" })
        }

        res.render('update.ejs', { user: exUser })
    } catch (err) {
        res.status(500).json({ msg: err.message })
    }
}


// read user data
const readAll = async (req, res) => {
    try {
        let data = await User.find()

        res.status(200).json({ length: data.length, users: data })

    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }
}

// update api
const userUpdate = async (req, res) => {
    try {
        let id = req.params.id
        let data = req.body
        // user id exists or not
        let extUser = await User.findById(id)
        if (!extUser)
            return res.status(404).json({ msg: 'requested user not found' })
        // updating the user info
        await User.findByIdAndUpdate({ _id: id }, data)
        // response
        res.status(201).json({ msg: "user data updated successfully" })

    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }
}


// delete api
const userDelete = async (req, res) => {
    try {
        let id = req.params.id

        // user id exists or not
        let extUser = await User.findById(id)
        if (!extUser)
            return res.status(404).json({ msg: 'requested user not found' })

        await User.findByIdAndDelete({ _id: id })

        return res.status(200).json({ msg: `User info deleted successfully` })
    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }
}

const defaultController = async (req, res) => {
    try {
        res.render('notfound.ejs')
    } catch (err) {
        res.status(500).json({ msg: err.message })
    }
}

module.exports = { homeController, addController, addUser, readAll, editUser, userUpdate, userDelete, defaultController }