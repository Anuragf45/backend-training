const bookModels=require('../models/bookModels');



const createBook=async function(req,res){
    let data=req.body;
    let savedData= await bookModels.create(data)
    res.send(savedData);
    }


const getBookData=async function(req,res){
    let allBooks=await bookModels.find()
    res.send(allBooks)
}
    module.exports.createBook=createBook;
    module.exports.getBookData=getBookData;