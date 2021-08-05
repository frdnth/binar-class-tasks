const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const userRoute = require('./routes/userRoute');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const connect = (async () => {
    try{
        await mongoose.connect(
            "mongodb+srv://fardian:fardian@clusters-00.rey1g.mongodb.net/blog?retryWrites=true&w=majority", 
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
				useCreateIndex: true,
            });
            console.log('DATABASE IS CONNECTED')
    } catch (error) {
        console.log(error)
    }
})();


app.use(userRoute)





PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`)
})