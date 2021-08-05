const Sequelize = require('sequelize');

const User = require('./models/user');

const { DataTypes } = Sequelize;

const sequelizeInstance = new Sequelize('swapi', 'postgres', 'dblocal321', {
  host: 'localhost',
  dialect: 'postgres',
  port: 5432
});

sequelizeInstance.authenticate()
.then((res) => console.log('Connection has been established successfully. ', res))
.catch((error) => console.error('Unable to connect to the database:', error))


const userModel = User(sequelizeInstance, DataTypes) // proses koneksi model -> database

module.exports = {
  userModel
};


