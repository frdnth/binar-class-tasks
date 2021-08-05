const roomRouter = require('express').Router();

const roomController = require('../controllers/roomController')

const authMidlleware = require('../middlewares/authMiddleware')


roomRouter.get('/room', authMidlleware, roomController.getRoom)
roomRouter.post('/room', authMidlleware, roomController.postRoom)
// roomRouter.put('/room', authMidlleware, roomController.updateRoom)
// roomRouter.delete('/room', authMidlleware, roomController.deleteRoom)

module.exports = roomRouter