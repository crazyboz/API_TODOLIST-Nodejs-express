const todo=require("../database")

exports.getData=async (req,res)=>{
    let data=""
    if(req.params.id === "none"){
        data= await todo.find()
    }else{
        data= await todo.find({priority:req.params.id}).exec()
    }
    res.status(200).send(data)
}

exports.create=async (req,res)=>{
    await todo.create({title:req.body.title,priority:req.body.priority,status:req.body.status})
    res.status(200).send({msg:"Succesfully created"})
}

exports.update=async (req,res)=>{
    await todo.findByIdAndUpdate(req.body._id, req.body)
    res.status(200).send({msg:"updated"})
}


exports.deletes=async (req,res)=>{
    await todo.findByIdAndDelete(req.body._id)
    res.status(200).send({msg:"Deleted successfully."})
}