const router = require('express').Router();

const authMiddleware = require('../middlewares/authMiddleware')
const authController = require('../controllers/authController')


router.post(
	"/auth/registrasi",
	authMiddleware.validateRegister,
	authController.register
)


router.post(
	"/auth/login",
	authMiddleware.validateLogin,
	authController.login
)

module.exports = router;