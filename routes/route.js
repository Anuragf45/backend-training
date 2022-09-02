const express = require('express');
const router = express.Router();
const cowinController=require('../controller/cowinController')

router.get("/cowin", cowinController.getDistricts)


router.get('/practice',cowinController.london)
router.get('/londonTemp',cowinController.londonTemp)
router.get('/memes',cowinController.memes)
router.post('/memesChange',cowinController.memesChange);
module.exports = router;

