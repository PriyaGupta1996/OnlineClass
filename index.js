const express = require('express')
const router = express.Router()
const dotenv = require('dotenv')

const connectDB = require("../OnlineClass/db")

const app = express()
dotenv.config()
connectDB()