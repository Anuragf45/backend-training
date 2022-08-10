const express = require('express');
// const  toNumber  = require('lodash');
// const abc = require('../introduction/intro')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    logger.welcome()

    res.send('My second ever api!')
});

router.get('/students', function (req, res){
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)
})

router.get('/student-details/:name', function(req, res){
    /*
    params is an attribute inside request that contains 
    dynamic values.
    This value comes from the request url in the form of an 
    object where key is the variable defined in code 
    and value is what is sent in the request
    */

    let requestParams = req.params

    // JSON strigify function helps to print an entire object
    // We can use any ways to print an object in Javascript, JSON stringify is one of them
    console.log("This is the request "+ JSON.stringify(requestParams))
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)
    
    res.send('The name is '+ studentName)
})


router.get('/student-details:name',function(req,res){
    const students=["anurag",'Aman'];
    console.log("This is the name " + JSON.stringify(req.params))
    let reqParams=req.params;
    let studentName=reqParams.name;

    res.send(studentName + " Srivastava")
})
// Problem 1
router.get('/GET/movies',function(req,res){
   const movies= ["Rang de basanti", "The shining", "Lord of the rings", "Batman begins"];
  
   res.send(movies)
})

// router.get('/GET/movies/:indexNumber',function(req,res){
//     const movies= ["Rang de basanti", "The shining", "Lord of the rings", "Batman begins"];
//     let a=req.params;
//     let b=Object.values(a)
//     for(let i=0;i<=b.length-1;i++){
//         console.log(b[i]);
//         let c=b[i];
//         if(c<=movies.length-1){
//             res.send(res.send(movies[c]))
//         }else{
//             res.send("Enter valid index")
//         }
//     }
//     })

// Problem 2
router.get('/GET/movies/:indexNumber',function(req,res){
    const movies= ["Rang de basanti", "The shining", "Lord of the rings", "Batman begins"];
    let reqParams=req.params;
    let index=reqParams.indexNumber;
    if(index>=0 && index<=movies.length-1){
        res.send(movies[index])
    }else{
        res.send("Wrong index");
    }

})

// Problem 4
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




// Problem 5

router.get("/GET/films/:filmId", function (req, res) {
    let films = [
      {
        id: 1,
        name: "The Shining",
      },
      {
        id: 2,
        name: "Incendies",
      },
      {
        id: 3,
        name: "Rang de Basanti",
      },
      {
        id: 4,
        name: "Finding Nemo",
      },
    ];
  
    let requestParams = req.params;
    const filmid = parseInt(requestParams.filmId);
    const fimlLength = films.length;
  
    let result = "";
    for (let i = 0; i < fimlLength; i++) {
      if (filmid === films[i].id) {
        result = films[i];
        break;
      } else {
        result = "No movie exists with this id";
      }
    }
    res.send(result);
  });


  router.post('/test-m', function (req, res) {
   res.send('My second ever api!')
   let id=req.body.name;
   let password=req.body.password;
   console.log(id,password)
   console.log(req.body);
});


router.post('/test-assignment', function(req,res){

  let players =
  [
      {
          "name": "manish",
          "dob": "1/1/1995",
          "gender": "male",
          "city": "jalandhar",
          "sports": [
              "swimming"
          ]
      },
      {
          "name": "gopal",
          "dob": "1/09/1995",
          "gender": "male",
          "city": "delhi",
          "sports": [
              "soccer"
          ]
      },
      {
          "name": "lokesh",
          "dob": "1/1/1990",
          "gender": "male",
          "city": "mumbai",
          "sports": [
              "soccer"
          ]
      },
  ]

  let obj=  {
    "name": "manisha",
    "dob": "1/1/1995",
    "gender": "male",
    "city": "jalandhar",
    "sports": [
    "swimming"
    ]
    }

  let reqData = req.body;
let newPlayerName = reqData.name;
let isNameRepeated = false;
 
for(let i=0;i<players.length;i++){
  if(players[i].name==newPlayerName){
    isNameRepeated=true;
    break;
  }
}
if(isNameRepeated){
  res.send("This player is already added")
}else{
  players.push(reqData)
  res.send(players);
}

})

module.exports = router;

