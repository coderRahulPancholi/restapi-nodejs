const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://rahulpancholi3937:rahulj%40143@cluster0.aka4gjs.mongodb.net/studentsapis").then(()=>{
    console.log("db sucess")
}).catch((e)=>{
    console.log("db fail")
})

