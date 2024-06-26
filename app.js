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



app.use(express.json())
app.use(cookieParser())
app.use(
    cors({
        origin:[process.env.Frontend_uri],
    methods:["GET","POST","PUT","DELETE"],
    credentials:true
})
)

app.use('/api/v1/users',userrouter)
app.use('/api/v1/task',taskrouter)
app.get("/", (req, res) => {
    res.send("Nice working");
  });



app.use(errormiddleware)
module.exports= app;