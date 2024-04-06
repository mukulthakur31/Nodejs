const express = require('express')
const userrouter = require('./routes/user.js')
const taskrouter = require('./routes/task.js')
const {config} =require('dotenv')
const {errormiddleware} = require('./middlewares/error.js')
const cors = require('cors')

const cookieParser = require('cookie-parser')

const app = express()
config({
    path:'./config.env'
})

// using middleware to get data  in body
app.use(express.json())
app.use(cookieParser())

app.use('/api/v1/users',userrouter)
app.use('/api/v1/task',taskrouter)
app.use(cors({
    origin:[process.env.FRONTEND_URL],
    methods:["get","post","put","delete"],
    credentials:true
}))

app.use(errormiddleware)
module.exports= app;