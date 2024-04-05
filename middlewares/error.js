class Errorhandler extends Error{
    constructor(message,statuscode){
        super(message)
        this.statuscode=statuscode
    }
}



const errormiddleware = (err,req,res,next)=>{
    const statuscode = err.statuscode||500
    return res.status(statuscode).json({
        success:false,
        message:err.message||"internalerror"

    })
} 

module.exports= {errormiddleware,
    Errorhandler,
};