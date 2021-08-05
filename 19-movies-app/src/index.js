const express = require('express');
const bodyParser = require('body-parser');

const authRouter = require('./routes/authRoute')
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//* ROUTER 
app.use(authRouter)


//
const port = process.env.PORT || 3000;
app.listen(port, ()=> {
    console.log(`Server Running on Port ${port}`);
})


module.exports = app;