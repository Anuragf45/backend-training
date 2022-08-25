const monngoose=require('mongoose');
const userSchema=new monngoose.Schema({

    name: String,
	balance:{type:Number,default:100}, // Default balance at user registration is 100
	address:String,
	age: Number,
 	gender: {type:String,enum:["male","female","other"]}, // Allowed values are - “male”, “female”, “other”
    isFreeAppUser:{type:Boolean,default:false}
})

module.exports=monngoose.model('user1',userSchema);