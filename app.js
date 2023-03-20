const express = require("express");
const app = express();
require("./src/db/connection")
const cors = require("cors");
const Student = require("./src/models/students")
const port = process.env.PORT || 8000;
app.use(cors());
app.use(express.json());

app.post("/students",(req,res)=>{
console.log(req.body)

// const user =  Student.findOne(req.body.email)

   
const user = new Student(req.body)

    user.save().then(()=>{
        res.status(200).send(user)
    
    }).catch((e)=>{
    res.send("Please try wtih diffrent email")
    
    })




  



    
   
})





app.get("/students",async (req,res)=>{

    try{
        const Sdata = await Student.find();
        res.send(Sdata)
    }catch{
        res.send("eroor")

    }

})
app.get("/students/:id",async (req,res)=>{

    try{
        const Sidata = await Student.findById(req.params.id);
        res.send(Sidata)
    }catch{s
        res.send("eroor")

    }

})
app.delete("/students/remove/:id",async (req,res)=>{

    try{
         await Student.findByIdAndRemove(req.params.id);
        res.send("deleted")
    }catch{
        res.send("eroor")

    }

})

app.listen(port,()=>{
    console.log('connection sucess')
})