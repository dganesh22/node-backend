
// rendering index.ejs

const homeController = async (req, res) => {
    try {
        res.render('index.ejs')
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

const defaultController = async (req, res) => {
    try {
        res.render('notfound.ejs')
    } catch (err) {
        res.status(500).json({ msg: err.message })
    }
}

module.exports = { homeController, addController, defaultController }