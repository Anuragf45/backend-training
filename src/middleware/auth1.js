
const jwt=require('jsonwebtoken')

      let mid1=async function(req,res,next){
        //authentication code
        let token = req.headers["x-auth-token"];
        if(!token) req.headers["x-Auth-token"];
        if(!token) return res.send({status:false,msg:"token must be present"});
    
        let decodedToken = jwt.verify(token, "functionUp is secret key");
        // console.log(decodedToken)
        if (!decodedToken)
          return res.send({ status: false, msg: "token is invalid" });
          

          //Authorization code
          let  userId1=decodedToken["userId"];
          let userId2=req.params.userId;
          if(userId1!=userId2) return res.send("You don't have access to change or fetch this user's details")

          next();
      }

      module.exports.mid1=mid1;