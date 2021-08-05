
const { DATE, QueryInterface } = require('sequelize');
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 64de1189bc008188ebccb89c45bdcd613b196006
=======
>>>>>>> 23cf1df6618127cdfd10f6f8a54f43b7fe9d6e01
>>>>>>> b891ae9767ff1579f8ea2c1d453e8e2d38440045
=======

const { DATE } = require('sequelize');

>>>>>>> 11e0733e624a045f19665f5a59fbfb5ff99e691d
const Sequelize = require('sequelize');

// ! Sequelize config
const sequelize = new Sequelize(
<<<<<<< HEAD
<<<<<<< HEAD
  'd15jipebchj51g',
  'mprqgkuqmsuzsv',
  'fa3542d13ef844bf3bf70e118eabfe82822e012fd7ea4f1033e2d35313a100a9', {
  host: 'ec2-3-232-92-90.compute-1.amazonaws.com',
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
        require: true,
        rejectUnauthorized: false
    }
  }
=======
=======
>>>>>>> b891ae9767ff1579f8ea2c1d453e8e2d38440045
  'postgres',
  'postgres',
  'dblocal321', {
  host: 'localhost',
  dialect: 'postgres',
  port: 5432
  // dialectOptions: {
  //   ssl: {
  //       require: true,
  //       rejectUnauthorized: false
  //   }
  // }
<<<<<<< HEAD
>>>>>>> 64de1189bc008188ebccb89c45bdcd613b196006
=======
>>>>>>> b891ae9767ff1579f8ea2c1d453e8e2d38440045
});

// ! Test connection
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

// ! create model
const Animal = (instance, DataTypes) => instance.define('animal', {
  id: {
    type: DataTypes.BIGINT(11).UNSIGNED,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING(30),
    allowNull: false
  },
  type: {
    type: DataTypes.STRING(30),
    allowNull: false
  },
  birth_date: {
    type: DataTypes.DATE(30),
    allowNull: false
  },
  created_at: {
    type: DataTypes.DATE(30),
    allowNull: false
  },
  updated_at: {
    type: DataTypes.DATE(30),
    allowNull: false
  }
}, {
  tableName: 'animal',
  timestamps: true,
  paranoid: false,
  underscored: true
});

const AnimalInstance = Animal(sequelize, Sequelize.DataTypes);


module.exports = AnimalInstance


// AnimalInstance.findAll()
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err))

// AnimalInstance.create({ name: 'bambang', type: 'kucing', birth_date: new Date() })
// .then((res) => console.log(res))
// .catch((err) => console.log(err))

