const express = require('express')
const connectDB = require('./config/db')
const colors = require('colors')
require('dotenv').config()

const port = 8000
const app = express()

// Init Database connection
connectDB()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Routes
const usersRoute = require('./routes/users')
app.use('/users', usersRoute)

// app.listen(port)
app.listen(port, () => console.log(`Server started at port: ${port}`))

// Exporting app for tests
// module.exports = app
