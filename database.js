const mongoose=require("mongoose")

const todo_schema=new mongoose.Schema({
    title:{
        type:String,
        required:[true,"Enter the title"]
    },
    priority:{
        type:String,
        required:[true,"enter the priority"]
    },
    status:{
        type:Boolean,
        required:[true,"Enter the status"]
    }
})


const todo=mongoose.model("todo",todo_schema)

module.exports=todo;