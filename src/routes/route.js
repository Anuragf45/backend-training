const express = require('express');
const router = express.Router();
const Usercontroller=require('../controllers/userController');
const bookController=require('../controllers/bookController');
const studentController=require('../controllers/studentController');
const labourController=require('../controllers/labourController');
const playerController=require('../controllers/playerController');
const employeeController=require('../controllers/employeeController');
const groceryController=require('../controllers/groceryController')

router.post('/test-me', function (req, res) {
    

    res.send('My second ever api!')
});

router.post('/createUser', Usercontroller.createUser)

router.get('/getUserData', Usercontroller.getUserData);


router.post('/bookData', bookController.createBook)

router.get('/getBookData', bookController.getBookData);

router.post('/createStudent',studentController.createStudent)


router.post('/labourDetails1',labourController.createLabour )
router.get('/labourDetails2',labourController.labourData);


router.post('/playerDetails',playerController.createPlayer);


router.post('/createEmployee',employeeController.createEmployee);
router.get('/getEmployee',employeeController.getEmployee);

router.post('/grocery',groceryController.createData )
router.get('/groData',groceryController.getData);
module.exports = router;

