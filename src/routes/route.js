const express = require('express');
const { createUser } = require('../controllers/userController');
const router = express.Router();
const Usercontroller=require('../controllers/userController');
const bookController=require('../controllers/bookController');
const studentController=require('../controllers/studentController');


router.post('/test-me', function (req, res) {
    

    res.send('My second ever api!')
});

router.post('/createUser', Usercontroller.createUser)

router.get('/getUserData', Usercontroller.getUserData);


router.post('/bookData', bookController.createBook)

router.get('/getBookData', bookController.getBookData);

router.post('/createStudent',studentController.createStudent)


module.exports = router;

