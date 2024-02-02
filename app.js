const express = require('express')
const morgan = require('morgan')
const userRoute = require('./routes/userRoute')
const goalRoute = require('./routes/goalRoute')
const app = express()

app.use(express.json())
app.use(morgan('combined'))
app.use('/user', userRoute)
app.use('/goals', goalRoute)

module.exports = app