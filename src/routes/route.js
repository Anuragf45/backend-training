const express = require('express');
const router = express.Router();

const bookController=require('../controllers/bookController')
router.post('/test-me', function (req, res) {
    

    res.send('My second ever api!')
});
//task-1
router.get('/createBook',bookController.createData)
//task-2
router.get('/bookList',bookController.getBook);
//task-3
router.post('/getBooksInYear',bookController.getBooksInYear)
//task-4
router.get('/getXINRBooks',bookController.priceBook)
//task-5
router.get('/getRandomBooks',bookController.random)
//task-6;
router.post('/getFetch',bookController.bodyFetch)

module.exports = router;

