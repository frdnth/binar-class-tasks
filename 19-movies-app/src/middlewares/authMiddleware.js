const jwt = require('jsonwebtoken');
const joi = require('joi');

const { users: usersModel } =require('../../models/index');
const authMiddleware = {};


authMiddleware.validateRegister = (req, res, next) => {
    //* validasi input
    const userSchema = joi.object({
        username: joi.string().required(),
        password: joi.string().required(),
        name: joi.string().required(),
        email: joi.string().email().required(),
        phone: joi.string().required(),
        profile_pic: joi.string().required()
    });


    const { error } = userSchema.validate(req.body);
    if (error) {
        res.status(400).send({
        status: 400,
        message: error.details[0].message,
        data: null
    })
    }


    next();
}

authMiddleware.validateLogin = (req, res, next) => {
    const loginSchema = joi.object({
        username: joi.string().required(),
        password: joi.string().required(),
    });

    const { error } = loginSchema.validate(req.body);
    if(error) {
        res.status(400).send({
            status: 400,
            message: error.details[0].message,
            data: null,
        })
    }


    next();
};






module.exports = authMiddleware;