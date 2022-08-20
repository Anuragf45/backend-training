const newPublisherModel = require("../models/newPublisherModel");

const createPublisher=async function(req,res){
    let data=req.body;
    let saveddata=await newPublisherModel.create(data);
    res.send(saveddata)
}

module.exports.createPublisher=createPublisher;