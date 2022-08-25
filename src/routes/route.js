const express = require('express');
const router = express.Router();
const controller=require('../controllers/userController')
const middleware=require('../middleware/mid1')



router.get('/test-me', middleware.mid1, controller.a );



module.exports = router;

