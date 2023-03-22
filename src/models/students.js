const mongoose = require("mongoose");


const studentSchema = new mongoose.Schema({

    name:{
        type:String,
        required: true,
        
    },
    email:{
        type:String,
        required: true,
       
    },
    password:{
        type:String,
        required: true
    }
})

const Student = new mongoose.model('Student', studentSchema);
Student.createIndexes();
module.exports = Student;