
const orderModel = require("../models/orderModel");
const productModel = require("../models/productModel");
const userModel = require("../models/userModel");

const createOrder=async function(req,res){
    let data=req.body;
    let orderAmount=req.body.amount;
    let isfreeappuser=req.headers["isfreeappuser"];
    
    let productID=req.body.productId;
    let productPrice=await productModel.findOne({"_id":{$in:[productID]}})
    let userBalance=await userModel.findOne()
    let c=userBalance.balance-productPrice.price;
    if(isfreeappuser=="false" && orderAmount>productPrice.price){
        res.send("Insufficient Balance.Please add funds")
    }else if(isfreeappuser=="true"){
        let savedData=await (await orderModel.create(data)).updateOne({"amount":0})
        res.send(savedData)
    }else if(isfreeappuser=="false" && orderAmount<=productPrice.price){
        let savedData=await (await orderModel.create(data)).updateOne({"amount":productPrice.price});
        let userUpdate=await userModel.updateOne({"_id":req.body.userId},{"balance":c})
        res.send(savedData)
    }

}

const find=async function(req,res){
    let as=await orderModel.find().populate('userId').populate('productId')
    res.send(as)
}
module.exports.createOrder=createOrder;
module.exports.find=find;


// let savedData=await orderModel.create(data)
// res.send(savedData)