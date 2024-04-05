const express = require('express')
const {getallusers,Register,getmydetails,login,logout}= require('../controller/user.js')
const isauthenticated = require('../middlewares/auth.js')

const router = express.Router()


router.post('/new',Register)
router.post('/login',login)
router.get('/logout',logout)
router.get('/me',isauthenticated,getmydetails)

module.exports= router