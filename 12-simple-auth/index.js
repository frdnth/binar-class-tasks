const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const { userModel } = require('./database/config');
const jwt = require('jsonwebtoken')

// const parkingRoute = require('./routes/parkingRoute')

const app = express();

// Setup express middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(parkingRoute)





app.post('/register', async (req, res) => {
    try{
        const saltRounds = 15;

        const salt = await bcrypt.genSalt(saltRounds);
        const hashedPassword = bcrypt.hashSync(req.body.password, salt);

        //1.Handling error when username is already in use
        const checkUsername = await userModel.findOne({where: {username: req.body.username}})
        if (checkUsername.dataValues.username===req.body.username) {
            res.send({
                status:201,
                message: 'username is already in use.'
            })
        } else {
            const savedUser = await userModel.create({
            ...req.body,
            password: hashedPassword
        })

        res.send({
            status: 200,
            message: 'register is success'
        })
        }

        
    } catch (error) {
        console.log(error)
        res.send({
            status: 500,
            message: 'register is failed'
        })
    }
})


app.post('/login', async (req, res) => {
    try{
        
        //2. Handling error when username isn't registered
        const user = await userModel.findOne({where: {username: req.body.username}})
        console.log(user)
        console.log(req.body.username)
        if(user!==null) {
            const isPasswordMatch = await bcrypt.compare(req.body.password, user.dataValues.password)

             if(isPasswordMatch) {
                 const token = await jwt.sign(user.dataValues, 'secret_key')
                 res.send({
                     status: 200,
                     token
                 })

             //3. Handling error if password is wrong    
             } else {
                 res.send({
                     status: 501,
                     message: 'The password is wrong.'
                 })
             }

        } else {
            res.send({
                status: 502,
                message: "Username isn't registered."
            })
        }


    } catch (error) {
        console.log(error)
        res.send({
            status: 500,
            message: 'Cannot login'
        })
    }
})






const PORT = 3002
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
})