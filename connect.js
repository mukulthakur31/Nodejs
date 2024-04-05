const mongoose  = require("mongoose");

const connectdb= ()=>{
    mongoose.connect(process.env.mongo_uri)
.then(()=> console.log("database connected"))
.catch((err=> console.log(err)))
}

module.exports=connectdb