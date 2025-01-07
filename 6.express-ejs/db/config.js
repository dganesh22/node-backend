const mongoose = require('mongoose')

const connectDb = async () => {
    if (process.env.MODE === "development") {
        return await mongoose.connect(process.env.LOCAL_DB)
            .then(res => {
                console.log('mongodb connected')
            })
            .catch(err => console.log(err.message))
    }
}

module.exports = connectDb