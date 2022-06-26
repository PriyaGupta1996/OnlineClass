const mongoose = require('mongoose')
const autoIncrement = require('mongoose-auto-increment');
require('dotenv').config()
const uri = process.env.MONGO_URI

const connectDB = async () => {
    try {
        mongoose.connect(uri, { useNewUrlParser: true })
        const db = mongoose.connection
        autoIncrement.initialize(db);
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