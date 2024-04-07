
const jwt = require('jsonwebtoken')

const sendcookies = async(user,res,message,statuscode=200)=>{
    const token = jwt.sign({_id:user._id},process.env.Jwt_secret)
    res
    .status(statuscode)
    .cookie("token",token,{
        httpOnly:true,
        maxAge:15*60*1000,
        sameSite:process.env.NODE_ENV ==="Development" ? "lax" : "none",
        secure:process.env.NODE_ENV ==="Development" ? false : true
    }).json({
        success:true,
        message
    })
}
module.exports = sendcookies