const express = require('express')

const port = 8000
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Routes
const usersRoute = require('./routes/users')
app.use('/users', usersRoute)

// app.listen(port)
// app.listen(port, () => console.log(`Server started at port: ${port}`))
module.exports = app
