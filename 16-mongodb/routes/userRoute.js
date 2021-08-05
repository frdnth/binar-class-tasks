const userRouter = require('express').Router();
const userController = require('../controllers/userController');

userRouter.get('/user', userController.getAllUser)
userRouter.get('/user/1', userController.getUser)
userRouter.post('/user', userController.createUser)
userRouter.put('/user', userController.updateUser)
userRouter.delete('/user', userController.deleteUser)






module.exports = userRouter;