const express = require('express');
const router = express.Router();
const bookController=require('../controllers/bookController');
const publisherController=require('../controllers/publisherController');
const authorContoller=require('../controllers/authorController');

router.post('/test-me', function (req, res) {
    res.send('My second ever api!')
});

router.post('/createAuthor',authorContoller.createAuthor)
router.post('/createPublisher',publisherController.createPublisher);
router.post('/createBook',bookController.createBook);
router.get('/getData',bookController.getData);
router.put('/updatebol',bookController.updateBol)
router.put('/update',bookController.update);

module.exports = router;

