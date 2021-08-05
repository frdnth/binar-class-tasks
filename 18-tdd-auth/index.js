const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { userModel } = require("./database");

const app = express();

// Setup express middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send({
    status: 200,
    data: [
      {
        start_lat: 20,
        start_long: 20,
        end_lat: 30,
        end_long: 30,
        rider_name: "bambang",
        driver_name: "irwin",
        driver_vehicle: "expander",
      },
    ],
  });
});

app.post("/register", async (req, res) => {
  try {
    const { username, password, name, address, phone } = req.body;
    const user = await userModel.findOne({
      where: { username: req.body.username },
    });
    // console.log(user);

    // ! handling error ketika username sudah terdaftar
    if (user === null) {
      const saltRounds = 15;
      const salt = await bcrypt.genSalt(saltRounds);
      const hashPassword = bcrypt.hashSync(req.body.password, salt);

      const savedUser = await userModel.create({
        ...req.body,
        password: hashPassword,
      });

      res.send({
        status: 200,
        message: "Successfully registered.",
        data: savedUser,
      });
    } else {
      res.send({
        status: 406,
        message: "The username is already taken, please try another username.",
      });
    }
  } catch (error) {
    console.log(error);
    res.send({
      status: 500,
      message: "Failed to register.",
    });
  }
});

app.post("/login", async (req, res) => {
  try {
    const user = await userModel.findOne({
      where: { username: req.body.username },
    });

    if (user === null) {
      res.send({
        status: 401,
        message: "Make sure you insert the right username or password.",
      });
    } else {
      const isPasswordMatch = await bcrypt.compareSync(
        req.body.password,
        user.password
      );
      if (isPasswordMatch) {
        const token = jwt.sign(user.dataValues, "secret_key");
        res.send({
          status: 200,
          message: "Success.",
          token,
        });
      } else {
        res.send({
          status: 401,
          message: "Make sure you insert the right username or password.",
        });
      }
    }
  } catch (error) {
    console.log(error);
    res.send({
      status: 500,
      message: "Failed to log in.",
    });
  }
});

app.listen(3002, () => {
  console.log("server is running on port 3002");
});

module.exports = app;
