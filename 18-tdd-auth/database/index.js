const Sequelize = require("sequelize");

const userModel = require("./models/userModel");

// Option 2: Passing parameters separately (other dialects)
const sequelizeInstance = new Sequelize(
  "parking-system", // database
  "postgres", // username
  "dblocal321",
  {
    host: "localhost",
    dialect: "postgres",
    port: 5432,
  }
);

// Testing the connection
sequelizeInstance
  .authenticate()
  .then((res) =>
    console.log("Connection has been established successfully. ", res)
  )
  .catch((error) => console.error("Unable to connect to the database:", error));

// Export model yang sudah digabung dengan sequelize
module.exports = {
  userModel: userModel(sequelizeInstance, Sequelize.DataTypes),
};
