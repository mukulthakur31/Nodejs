
const User = require('../models/user.js')
const bcrypt = require('bcrypt')
const  sendcookies = require('../utils/features.js')




const login = async (req,res,next)=>{
    try {
        const {email,password} = req.body
    const user = await User.findOne({email}).select('+password')
    if(!user) return next(new Errorhandler("user not found",401))

    const ismatch = await bcrypt.compare(password,user.password)
    if(!ismatch) return res.status(401).json({
        message:"email or password is incorrect"
    })
    sendcookies(user,res,"welcome back",201)
    } catch (error) {
        next(error)
    }
}



const Register = async (req,res)=>{

    try {
        const {name,email,password} = req.body
    let user = await User.findOne({email})
    
    if(user) return next(new Errorhandler("user already exists",401))

    const hashedpass = await bcrypt.hash(password,10)

    user =await User.create({name,email,password:hashedpass})

    sendcookies(user,res,"registered successfully",201)
    } catch (error) {
        next(error)
    }
}

const getmydetails =  (req,res) => {
  
    res.status(201).json({
        success:true,
        user:req.user
    })
}
const logout =  (req,res) => {
    res.status(200)
    .cookie('token',"",{expires: new Date(Date.now()),
        // sameSite:process.env.NODE_ENV ==="Development"?'lax':"none",
        // secure:process.env.NODE_ENV ==="Development"?false:true
    }).json({
        success:true,
        user:"logout"
    })
}



module.exports={
    Register,
    getmydetails,
    login,
    logout
    
}