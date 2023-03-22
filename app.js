const express = require("express");
const app = express();
require("./src/db/connection")
const cors = require("cors");
const Student = require("./src/models/students")
const port = process.env.PORT || 8000;
app.use(cors());
app.use(express.json());

app.post("/students",async (req,res)=>{
console.log(req.body)

// const user =  Student.findOne(req.body.email)




try{
    let user = await Student.findOne({email:req.body.email});
    if(user){
        res.json({error:"User Alreadty Exists"});
    
    }else{
        const nuser = await new Student(req.body);

        nuser.save()
        res.status(200).send(nuser)
        
    }


}catch(er){
    res.json({error:"Internal Error "})

}
   
})


app.post("/students/login",async (req,res)=>{

    try{
        let user = await Student.findOne({email:req.body.email})
        
        if(user){
            
            if(req.body.password === user.password) {
                const uid = user._id;
                res.json({uid})
    
            }else{
                res.status(400).json({Error:"password wrong"})

            }
        }
       
        else{
            res.status(400).json({Error:"No User Found "}) 
        }
        
    }catch{
        res.status(400).json({Error:"Some Internal Error "}) 

    }

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