const mongoose=require('mongoose');
const objectId=mongoose.Schema.Types.ObjectId;

const orderScehma= new mongoose.Schema({

    userId:{type:objectId,ref:'user1'} ,
	productId:{type:objectId,ref:'product'},
	amount: Number,
	isFreeAppUser: {type:Boolean,default:false}, 
	date: String 
})

module.exports=mongoose.model('order',orderScehma);