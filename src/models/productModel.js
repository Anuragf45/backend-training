const mongoose = require('mongoose');
const prodeuctSchema=new mongoose.Schema({

    name:String,
	category:String,
	price:Number
})

module.exports=mongoose.model('product',prodeuctSchema);