const express = require('express');
const bodyParser = require('body-parser');

const parkingRoute = require('./routes/parkingRoute')

const app = express();

// Setup express middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(parkingRoute)


const PORT = 3002
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
})