const express = require('express');
const router = express.Router();

const bookController=require('../controllers/bookController')
router.post('/test-me', function (req, res) {
    

    res.send('My second ever api!')
});


router.post('/createBook',bookController.createBook);
router.post('/createAuthor',bookController.createAuthor);


router.get('/getDet',bookController.findAuthor)

router.get('/update1',bookController.updatePrice)



router.get('/range',bookController.range)
module.exports = router;

