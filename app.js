const express =require("express")
const app=express()
// const cors=require("cors")
const mongoose=require("mongoose")
const {getData,create,update,deletes}=require("./components/Curd")


mongoose.connect("mongodb+srv://dineshn20:PfpP1VIFgSTPaZxw@cluster0.iv9wg6d.mongodb.net/TodoList?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("database is connected")
}).catch((err)=>{console.log(err)})

//database 

// var allowlist = ['https://crazyboz.github.io/Todo_List-MERN/']
// var corsOptionsDelegate = function (req, callback) {
//   var corsOptions;
//   if (allowlist.indexOf(req.header('Origin')) !== -1) {
//     corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
//   } else {
//     corsOptions = { origin: false } // disable CORS for this request
//   }
//   callback(null, corsOptions) // callback expects two parameters: error and options
// }


app.use(express.json())
// app.use(cors(corsOptionDelegate))

app.get("/data/:id",getData)

app.post("/data",create)

app.put("/data",update)

app.delete("/data", deletes)

app.use("*",(req,res)=>{
    res.status(404).send({msg:"No such url"})
})

app.listen(process.env.PORT ||3000 ,()=>{
    console.log("server is created....")
})
