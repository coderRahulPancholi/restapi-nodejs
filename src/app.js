const express = require("express");
const app = express();
require("./db/connection")
const Student = require("./models/students")
const port = process.env.PORT || 8000;

app.use(express.json());

app.post("/students",(req,res)=>{
console.log(req.body)
    const user = new Student(req.body)
    user.save().then(()=>{
        res.status(200).send(user)

    }).catch((e)=>{
    res.send(e)

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
        const Siddata = await Student.findByIdAndRemove(req.params.id);
        res.send("deleted")
    }catch{
        res.send("eroor")

    }

})

app.listen(port,()=>{
    console.log('connection sucess')
})