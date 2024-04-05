const mongoose  = require("mongoose")

const schema= new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true  
    },
    isCompleted:{
        type:Boolean,
        select:false
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }

})

const Task = mongoose.model('task',schema)

module.exports= Task 