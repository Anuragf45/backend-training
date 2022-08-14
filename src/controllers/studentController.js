
const studentModel=require('../models/studentModel');


const createStudent=async function(req,res){

    let data=req.body;
    const storedData= await studentModel.create(data);
    res.send(storedData);
  }

  module.exports.createStudent=createStudent;