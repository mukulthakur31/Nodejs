const Task = require('../models/task.js')
const {Errorhandler} = require('../middlewares/error.js')

const newTask=async (req,res,next)=>{
 try {
    const {title,description} = req.body
    await Task.create({
      title,
      description,
      user:req.user
  })
  res.status(201).json({
      succcess:true,
      message:"task added successfully"
  })
 } catch (error) {
    next(error)
 }

    
}

const getmytask = async (req,res,next)=>{
   try {
    const userid=req.user._id
    const tasks = await Task.find({user:userid})
    res.status(200).json({
        success:true,
        tasks
    })
   } catch (error) {
        next(error)
   }
    
}
const updatetask = async (req,res,next)=>{

        const {id} = req.params;
        const task = await Task.findById(id)
        if(!task) return next(new Errorhandler("id not found",401))
        task.isCompleted = !task.isCompleted
        await task.save()
    res.status(200).json({
        success:true,
       message :"task updated"
    })
    
}
const deletetask = async (req,res,next)=>{
    const {id} = req.params;
    const task = await Task.findById(id)
    if(!task) return next(new Errorhandler("id not found",401))
    await task.deleteOne()
    res.status(200).json({
        success:true,
        message :"task deleted"
    })
    
}



module.exports={
    newTask,
    getmytask,
    updatetask,
    deletetask
}