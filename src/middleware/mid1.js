let mid1=function(req,res,next){
    let loggedIn=true;
    if(loggedIn==true){
        console.log("The details are getting logged below")
        console.log("IP is:"+ req.ip);
        console.log("URL is :"+ req.url);
        console.log("Timestamps : "+Date.now())
        next();
    }else{
        res.send("Log in first")
    }
}

module.exports.mid1=mid1;