const userModel = require("../models/userModel");


const createUser=async function(req,res){
    let isfreeappuser=req.headers["isfreeappuser"];
    if(!isfreeappuser){
        res.send("the request is missing a mandatory header which is 'isFreeAppUser'.")
    }else{
        let data=req.body;
        let savedData=await (await userModel.create(data)).updateOne({"isFreeAppUser":isfreeappuser})
        res.send({savedData})
    }
}

module.exports.createUser=createUser;