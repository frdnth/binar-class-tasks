const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { users: userModel } = require('../../models/index')


const authController = {};

authController.register = async (req,res) => {
	const { username, password } = req.body;

	const existingUser = await userModel.findOne({
		where: { username: username }
	});

	//* handling if username exist
	if(existingUser !== null) {
		res.status(400).send({
			status: 400,
			message: 'username is already exist.',
			data: null
		})
	} else {
		const results = await userModel.create({
			...req.body,
			password: bcrypt.hashSync(password, 10)
		});

		res.status(200).send({
			status: 200,
			message: 'ok',
			data: results
		});
	}
}


module.exports = authController;