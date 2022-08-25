const express = require('express');
var bodyParser = require('body-parser');
const {default:mongoose}=require('mongoose')
const route = require('./routes/route.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use (
//     function (req, res, next) {
//         console.log ("inside GLOBAL MW");
//         next();
//   }
//   );

mongoose.connect("mongodb+srv://user_1:password45@cluster0.ocjw7tu.mongodb.net/?retryWrites=true&w=majority",{
    useNewUrlParser:true
})
.then(   ()=>console.log("MongoDB is connected"))
.catch(  err=>console.log(err))
app.use('/', route);

app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});



