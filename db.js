const mongoose = require('mongoose')
require('dotenv').config()
const uri = process.env.MONGO_URI

const connectDB = async () => {
    try {
        mongoose.connect(uri, { useNewUrlParser: true })
        const db = mongoose.connection
        db.once('open', _ => {
            console.log("Database connected")
        })

        db.on('error', err => {
            console.error('connection error:', err)
        })
    }
    catch (error) {
        console.error('connection error:', err)
    }
}

module.exports = connectDB