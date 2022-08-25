
const productModel = require("../models/productModel");
const userModel = require("../models/userModel");

//middleware to check wheater isfreeappuser is there in header or not.
let mid1=function(req,res,next){
    let isfreeappuser=req.headers["isfreeappuser"];
    if(!isfreeappuser){
        res.send("the request is missing a mandatory header which is 'isFreeAppUser'.")
    }else{
        next()
    }
}
//middleware for validation of userId and productId
let mid2= async function(req,res,next){
   
let b=req.body.userId;
let d=req.body.productId;
let a=await userModel.findOne({"_id":{$in:[b]}})
let c=await productModel.findOne({"_id":{$in:[d]}})

if(b){
      if(d){
               if(a==null || a.id!=b){
                res.send("Enter valid user id")
                
               }else{
                     if(c==null || c.id!=d){
                        res.send("product id is not valid")
                     }else if(a.id==b && c.id==d){

                                next();

                     }
               }
      }else{
        res.send("product is mandatory")
      }
}else{
    res.send("User is mandatory")
}
}


module.exports.mid1=mid1;
module.exports.mid2=mid2;
