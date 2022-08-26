const { count } = require("console")
const orderModel = require("../models/orderModel");
const productModel = require("../models/productModel");
const userModel = require("../models/userModel");

const createOrder=async function(req,res){
    let data=req.body;
    let orderAmount=req.body.amount;
    let isfreeappuser=req.headers["isfreeappuser"];
    
    let productID=req.body["productId"];
    let productPrice=await productModel.findById(productID);
    let userBal=await userModel.findById(req.body["userId"])
    let userBalance = userBal["balance"]
    let c=userBalance-productPrice.price;
    let userId=req.body.userId;


    if(isfreeappuser=="false" && productPrice.price>userBalance){
        res.send("Insufficient Balance.Please add funds")
    }else if(isfreeappuser=="false" && productPrice.price<=userBalance){
        await userModel.findOneAndUpdate(
            {_id:userId},
            {$set:{balance:c}}  )
            data['amount']=productPrice.price;
            data['isFreeAppUser']=req.headers.isFreeAppUser;
       
        let savedData1=await orderModel.create(data)
        res.send({savedData1})
    }else if(isfreeappuser=="true"){
        let savedData=await (await orderModel.create(data)).updateOne({"amount":0})
        res.send(savedData)


    }

}



const find=async function(req,res){
    let as=await orderModel.find().populate('userId').populate('productId')
    res.send(as)
}
module.exports.createOrder=createOrder;
module.exports.find=find;

