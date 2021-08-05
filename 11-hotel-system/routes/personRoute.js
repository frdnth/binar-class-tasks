const personRouter = require('express').Router();

const personController = require('../controllers/personController')

const authMidlleware = require('../middlewares/authMiddleware')


personRouter.get('/person', authMidlleware, personController.getPerson)
personRouter.post('/person', authMidlleware, personController.postPerson)
// personRouter.delete('/person', personController.deletePerson)

module.exports = personRouter;
