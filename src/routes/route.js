const express = require('express');
const abc = require('../introduction/intro')
const log=require('../logger/logger')
const hell=require('../util/helper')
const formatt=require('../validator/formatter')

const underScore=require('underscore');
const lodashh=require('lodash');
const { json } = require('body-parser');
const router = express.Router();

router.get('/test-me', function (req, res) {
    // console.log('My batch is', abc.name)
    // abc.printName()
    // console.log("==================MODULE-1=================")
    // //module 1
    // log.kchbhi();
    // console.log("==================MODULE-2=================")
    // //module 2
    // console.log(hell.today());
    // console.log(hell.month());
    // console.log(hell.batchIn());

    // const weeksays=["monday","tuesday"]
    // console.log(underScore.first(weeksays))
    
// console.log("==================MODULE-3=================")
//     //module 3
//     console.log("The string has been trimmed i.e,"+formatt.trim);
//     console.log("The string has been converted to lower case i.e, "+formatt.toLower);
//     console.log("The string has been converted to upper case i.e, "+formatt.toUpper);
    res.send('My second ever api!')


    //lodash
// const arr=["Januray","February","march","april","May","june","july","August","september","october","november","december"]
// console.log(lodashh.chunk(arr,4))

// console.log("=============2=============");
// const odd=[1,3,5,7,9,11,13,15,17,19];
// console.log(lodashh.tail(odd));
// console.log("=============3=============");
// const arr1=[1,2,3,4];
// const arr2=[2,4,7,9];
// const arr3=[4,5,2,8];
// const arr4=[90.5,2,3];
// const arr5=[3,4,2,7];

// console.log(lodashh.uniq(arr1,arr2,arr3,arr4,arr5));
// console.log("=============4=============");
// const keyVal=[["Ram","Lakshman"],["Krishna","Balram"],["radhe","krishna"]]
// console.log(lodashh.fromPairs(keyVal));
});

router.get('/student-details:name',function(req,res){
    const students=["anurag",'Aman'];
    console.log("This is the name " + JSON.stringify(req.params))
    let reqParams=req.params;
    let studentName=reqParams.name;

    res.send(studentName + " Srivastava")
})

router.get('/GET/movies',function(req,res){
   const movies= ["Rang de basanti", "The shining", "Lord of the rings", "Batman begins"];
  
   res.send(movies)
})

router.get('/GET/movies/:indexNumber',function(req,res){
    const movies= ["Rang de basanti", "The shining", "Lord of the rings", "Batman begins"];
    let a=req.params;
    let b=Object.values(a)
    for(let i=0;i<=b.length-1;i++){
        console.log(b[i]);
        let c=b[i];
        if(c<=movies.length-1){
            res.send(res.send(movies[c]))
        }else{
            res.send("Enter valid index")
        }
    }
    })


    router.get('/GET/films',function(req,res){
        const moviess=[{
            id: 1,
            name: "The Shining"
           }, {
            id: 2,
            name:" Incendies"
           }, {
            id: 3,
            name: "Rang de Basanti"
           }, {
            id: 4,
            name: "Finding Nemo"
           }]
           res.send(moviess)
    })
// router.get('/test-you', function(req, res){

// res.send('This is the second routes implementation')
// })

// router.get('/test-us',function(req, res){
 

//     res.send('This is test-us router')
// })
module.exports = router;
// adding this comment for no reason



router.get('/sol-1',function(req,res){
    let arr= [1,2,3,5,6,7]
 
    let total = 0;
   for(let i=0;i<arr.length;i++){
       total=total+arr[i];
       
   }
 const lastDigit=arr.pop()
 
 
 const consSum=lastDigit*(lastDigit+1)/2;
 const missingNumber=consSum-total;
  
    res.send(  "missing number is " + missingNumber  );
  });
 

  router.get('/sol-2',function(req,res){
    let arr= [33, 34, 35, 37, 38]
   let len= arr.length
 
   let total = 0;
   for (let i=0;i<len;i++) {
       total =total+ arr[i];
   }
 
   let firstDigit= arr[0]
   let lastDigit= arr.pop()
   let consecutiveSum= (len + 1) * (firstDigit+ lastDigit ) / 2
   let missingNumber= consecutiveSum - total
  
    res.send(  "missing number is " + missingNumber  );
  });
