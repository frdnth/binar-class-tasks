const express = require('express');


const app = express();


app.get('/', (req,res) => {
    res.send({
        status: 200,
        data: [],
    })
})


app.listen(3002, () => {
    console.log('Server is running on port 3002.')
})

module.exports = app