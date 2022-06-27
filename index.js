const express = require('express')
const router = express.Router()

const dotenv = require('dotenv')

const connectDB = require("../OnlineClass/db")
const student = require('../OnlineClass/routes/studentRoutes')
const teacher = require('../OnlineClass/routes/teacherRoutes')
const subject = require('../OnlineClass/routes/subjectRoutes')

const app = express()
dotenv.config()
connectDB()

app.use(express.json()); // to accept JSON data

app.use('/api/student', student)
app.use('/api/teacher', teacher)
// app.use('/api/subject', subject)

const server = app.listen(5000, console.log('Server listening on 5000'))