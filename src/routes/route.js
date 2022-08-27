const express = require('express');
const router = express.Router();
const myUserController=require('../controllers/myUserController');
const middleware=require('../middleware/auth1')

router.post('/createUser',myUserController.createData)
router.post('/loginUser',myUserController.login);

router.get('/user/:userId',middleware.mid1,myUserController.getUserData)
router.put('/user/:userId',middleware.mid1,myUserController.updateUser);
router.delete('/delete/:userId',middleware.mid1,myUserController.deleteUser)


module.exports = router;

