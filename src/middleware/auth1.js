
const jwt=require('jsonwebtoken')

      let mid1=async function(req,res,next){
        
        let token = req.headers["x-auth-token"];
        if(!token) req.headers["x-Auth-token"];
        if(!token) return res.send({status:false,msg:"token must be present"});
    
        let decodedToken = jwt.verify(token, "functionUp is secret key");
        if (!decodedToken)
          return res.send({ status: false, msg: "token is invalid" });
          
          next();
      }

      module.exports.mid1=mid1;