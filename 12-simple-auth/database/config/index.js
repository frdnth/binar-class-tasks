const Sequelize = require('sequelize');

// const activityModel = require('../models/activityModel');
// const vehicleModel = require('../models/vehicleModel');
const userModel = require('../models/userModel')

// 1. open connection sequelize
const sequelize = new Sequelize('parking-system', 'postgres', 'dblocal321', {
  host: 'localhost',
  dialect: 'postgres'
});

// 2. test connection sequelize
sequelize.authenticate()
  .then((res) => console.log('Connection has been established successfully. ', res))
  .catch((err) => console.error('Unable to connect to the database:', err))


// export model yang sudah di gabungkan dengan sequelize
module.exports = {
  // activityModel: activityModel(sequelize, Sequelize.DataTypes),
  userModel: userModel(sequelize, Sequelize.DataTypes)
}