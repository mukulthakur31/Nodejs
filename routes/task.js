const express = require('express')
const {newTask,getmytask,updatetask,deletetask} = require('../controller/task.js');
const isauthenticated = require('../middlewares/auth.js');

const  router = express.Router()

router.post("/new",isauthenticated,newTask);
router.get("/mytask",isauthenticated,getmytask);
router.route('/:id').put(isauthenticated,updatetask).delete(isauthenticated,deletetask)

module.exports=router;