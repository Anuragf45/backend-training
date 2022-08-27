const myUserModel = require("../models/myUserModel");
const jwt=require('jsonwebtoken')

//for creating data
const createData= async function(req,res){
    let data=req.body;
    let user=await myUserModel.create(data);
    res.send({user})
}


//for login purpose
const login=async function(req,res){
    let userId=req.body.emailId;
    let password=req.body.password;
    let user=await myUserModel.findOne({emailId:userId , password:password})

    if(!user) return res.send({status:false,msg:"userId or Password is incorrect"})

    let token=jwt.sign({
        userId:user._id.toString(),
        batch:"plutonium",
        organisation:"FunctionUp"
    },"functionUp is secret key")

   res.setHeader("x-auth-token",token)
   res.send({status:true,token:token})

}


const getUserData=async function(req,res){
    
    
      
      let userId = req.params.userId;
      let userDetails = await myUserModel.findById(userId);
      if (!userDetails)
        return res.send({ status: false, msg: "No such user exists" });
    
      res.send({ status: true, data: userDetails });

    
}

const updateUser = async function (req, res) {


  
    let userId = req.params.userId;
    let updateDetails=req.body;


    let user = await myUserModel.findById(userId);
   
    if (!user) {
      return res.send("No such user exists");
    }
   

    let updatedUser = await myUserModel.findOneAndUpdate({ _id: userId },updateDetails);
    res.send({ status: true, data: updatedUser });
  };


const deleteUser=async function(req,res){
  
   
      let userId = req.params.userId;
  
      let user = await myUserModel.findById(userId);
     
      if (!user) {
        return res.send("No such user exists");
      }
     
      let upDel = await myUserModel.findOneAndUpdate({ _id: userId },{"isDeleted":true});
      res.send("user is deleted");
}

module.exports.login=login
module.exports.createData=createData;
module.exports.getUserData=getUserData;
module.exports.updateUser=updateUser;
module.exports.deleteUser=deleteUser;