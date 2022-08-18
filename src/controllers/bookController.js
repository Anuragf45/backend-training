const authorModels = require("../models/authorModels");
const bookModel = require("../models/bookModel")
//creating book
let createBook=async function(req,res){
    let data = req.body;
    let savedData=await bookModel.create(data);
    res.send(savedData);

}

// creating author 
let createAuthor=async function(req,res){
    let data=req.body;
    let savedData=await authorModels.create(data);
    res.send(savedData)
}

//finding book list by author name
let findAuthor=async function(req,res){
    let result1=await authorModels.findOne({author_name:"Chetan Bhagat"}).select({author_id:1})
    
   let result2= await bookModel.find({author_id:result1.author_id});
    res.send({result2})

}


//find author of two states and update book price to 100;

let updatePrice= async function(req,res){
    let result1=await bookModel.findOneAndUpdate(
        {name:"two States"}, //condition
        {$set:{price:100}} //update
    );

    let result2=await bookModel.findOne({name:"two States"}).select({price:1})
    let result3= await authorModels.findOne({author_id:result1.author_id}).select({author_name:1});

    res.send({result2, result3})
}


// Find the books which costs between 50-100(50,100 inclusive) and respond back with the author names of respective books

let range=async function(req,res){
    let result1=await bookModel.find({ price : { $gte: 50},price: {$lte: 100} }).select({author_id:1});
   
   
  result3=await authorModels.find(result1.forEach(element => {
    {author_id:result1.author_id}
  })).select({author_name:1})

    
    res.send(result3);
}





module.exports.createBook=createBook;
module.exports.createAuthor=createAuthor;
module.exports.findAuthor=findAuthor;
module.exports.updatePrice=updatePrice;
module.exports.range=range;

