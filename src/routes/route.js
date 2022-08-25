const express = require('express');
const router = express.Router();
// const controller=require('../controllers/userController')
// const middleware=require('../middleware/mid1')
const productController=require('../controllers/productController')
const userController=require('../controllers/userController')
const orderController=require('../controllers/orderController');
const { mid1, mid2, mid3 } = require('../middleware/mid1');



// router.get('/test-me', middleware.mid1, controller.a );

router.post('/createProduct',productController.createProduct)
router.post('/createUser',userController.createUser)
router.post('/createOrder',mid1,mid2,orderController.createOrder)
router.get('/get',orderController.find)



module.exports = router;

