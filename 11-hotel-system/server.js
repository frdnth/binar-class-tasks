const express = require('express')

const bodyParser = require('body-parser')

const jwt = require('jsonwebtoken')

const bcrypt = require('bcrypt')

const roomRoute = require('./routes/roomRoute')
const personRoute = require('./routes/personRoute')
const priceRoute = require('./routes/priceRoute')
const orderRoute = require('./routes/orderRoute')

const { userModel } = require('./database/config/index')

const app = express();

//setup express middleware
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());
app.use(roomRoute);
app.use(personRoute);
app.use(priceRoute);
app.use(orderRoute);



app.post('/register', async (req, res) => {
    try{
        const saltRounds = 15;

        const salt = await bcrypt.genSalt(saltRounds);
        const hashedPassword = bcrypt.hashSync(req.body.password, salt);
        
        // 1.Handling error when username is already in use
        const checkUsername = await userModel.findOne({where: {username: req.body.username}})
        if (checkUsername.dataValues.username===req.body.username || checkUsername!=null) {
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


app.get('/coba', (req, res) => {
    const token = req.headers.authorization
    const decodeToken = jwt.verify(token, 'secret_key')

    //cek apakah token ada
    //cek apakah token berhasil di encode
    //next()
})






const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})