const mongoose = require("mongoose");


const studentSchema = new mongoose.Schema({

    name:{
        type:String,
        required: true,
        unique: true 
    }
})

const Student = new mongoose.model('Student', studentSchema);

module.exports = Student;