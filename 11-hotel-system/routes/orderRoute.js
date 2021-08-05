const orderRouter = require('express').Router();

const orderController = require('../controllers/orderController')

const authMidlleware = require('../middlewares/authMiddleware')


orderRouter.get('/order', authMidlleware, orderController.getOrder)
orderRouter.post('/order', authMidlleware, orderController.postOrder)
orderRouter.put('/order', authMidlleware, orderController.updateOrder)
orderRouter.delete('/order', authMidlleware, orderController.deleteOrder)

module.exports = orderRouter;