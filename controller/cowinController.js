const axios=require('axios');


//problem1
let getDistricts = async function (req, res) {
    try {
        let id = req.query.districtId;
        let date=req.query.date;
       
       
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${id}&date=${date}`
        }
        let result = await axios(options);
        console.log(result.data)
       
        res.status(200).send({ msg: result.data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


// https://cdn-api.co-vin.in/api - Production Server

const londonTemp=async function(req,res){
    try{
         let city=req.query.city;

        let kbc={
            method:'get',
            url:`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e68de9cf71a9c3dbbd2b9e36182787af`
        }
        let result=await axios(kbc);
        let data=result.data.main.temp;
        console.log(result);
        res.send({data})
    }catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

const london=async function(req,res){
    
   try {
    let cities=   [ "Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]  
    let cityObjArr=[]
    for(let i=0;i<cities.length;i++){
        let obj={city:cities[i]};
        let kbc={
            method:'get',
            url:`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=e68de9cf71a9c3dbbd2b9e36182787af`
         }
         let result =await axios(kbc)
         obj.temp=result.data.main.temp;
         cityObjArr.push(obj);
    }



    let sortedArray= cityObjArr.sort(function(a,b) {return a.temp-b.temp})

    
    res.send({sortedArray})}
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err })
    }
}



const memes=async function(req,res){
    try{
        let kbc={
        method:'get',
        url:'https://api.imgflip.com/get_memes'
    }
    let result=await axios(kbc)
    let main=result.data
    res.status(200).send({main})
}
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }

}

const memesChange=async function(req,res){
 try { 
    let template_id =req.query.template_id;
   let text0 =req.query.text0;
   let text1 =req.query.text1;
   let username =req.query.username
   let password =req.query.password

    let kbc={
        method:'post',
        url:`https://api.imgflip.com/caption_image?template_id=${template_id}&text0=${text0}&text1=${text1}&username=${username}&password=${password}`
    }
    let result= await axios(kbc);
    let data=result.data
    res.status(201).send({data})
}
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}



module.exports.getDistricts=getDistricts;
module.exports.london=london
module.exports.memes=memes;
module.exports.memesChange=memesChange;
module.exports.londonTemp=londonTemp;