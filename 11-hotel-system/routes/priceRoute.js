const priceRouter = require('express').Router();

const priceController = require('../controllers/priceController')

const authMidlleware = require('../middlewares/authMiddleware')


priceRouter.get('/price', authMidlleware, priceController.getPrice)
priceRouter.post('/price', authMidlleware, priceController.postPrice)
// priceRouter.delete('/price', priceController.deletePrice)

module.exports = priceRouter;