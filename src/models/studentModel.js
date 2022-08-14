const mongoose=require('mongoose');
const studentSchema=new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    Standard:Number,
    Stream:String
}, {timestamps:true})

module.exports=mongoose.model('student',studentSchema);