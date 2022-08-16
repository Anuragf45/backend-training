const { db } = require("../models/bookModel");
const bookModel = require("../models/bookModel");
//problem-1
let createData=async function(req,res){

    let data=req.body;
    let savedData= await bookModel.create(data);
    res.send(savedData);
}
//problem-2
let getBook=async function(req,res){
    let giveData=await bookModel.find().select({bookName:1,authorName:1})
    res.send({giveData})
}
//problem - 3
let getBooksInYear= async function(req,res){
    let input=req.query.input;
    let giveData=await bookModel.find({year:{$eq:input}})
    res.send({giveData})
}

//problem-5
let priceBook=async function(req,res){

    let giveData=await bookModel.find({'price.indianPrice':{$in:["Rs.100","Rs.200","Rs.500"]}})
    
    
   res.send({giveData})
    
}

//problem-6
let random=async function(req,res){
    let giveData=await bookModel.find({$or:[{stockAvailable:false},{totalPages:{$gt:500}}]})
    res.send({giveData});
}

//problem-4
let bodyFetch=async function(req,res){
    let data=req.body;
    let savedData=await bookModel.find(data)
    res.send({savedData});
}
module.exports.createData=createData;
module.exports.getBook=getBook
module.exports.getBooksInYear=getBooksInYear;
module.exports.priceBook=priceBook;
module.exports.random=random;
module.exports.bodyFetch=bodyFetch;