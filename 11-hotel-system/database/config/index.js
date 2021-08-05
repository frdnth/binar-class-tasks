const Sequelize = require('sequelize')

const personModel = require('../models/personModel')
const priceModel = require('../models/priceModel')
const roomModel = require('../models/roomModel')
const orderModel = require('../models/orderModel')
const userModel = require('../models/userModel')


//1. open connection sequelize
const sequelize = new Sequelize('hotel-system', 'postgres', 'dblocal321', {
    host: 'localhost',
    dialect: 'postgres'
});


//2. test connection sequelize
sequelize.authenticate()
    .then((result) => console.log('Connection has been established succesfully.', result))
    .catch((error) => console.error('Unable to connect to the database:', error))

//3. export model
module.exports = {
    personModel: personModel(sequelize, Sequelize.DataTypes),
    priceModel: priceModel(sequelize, Sequelize.DataTypes),
    roomModel: roomModel(sequelize, Sequelize.DataTypes),
    orderModel: orderModel(sequelize, Sequelize.DataTypes),
    userModel: userModel(sequelize, Sequelize.DataTypes)
}