const User = require('../models/user.js')
const jwt = require('jsonwebtoken')

 const isauthenticated = async (req,res,next)=>{
    const {token} = req.cookies
    if(!token)
    return res.status(404).json({
success:false,
message:"Login First"
})

const decoded = jwt.verify(token,process.env.Jwt_secret)
 req.user = await User.findById(decoded._id);
 next()
}

module.exports = isauthenticated;