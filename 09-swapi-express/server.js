const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const { userModel } = require('./database')

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/user', (req, res) => {
  userModel.findAll()
    .then(result => {
      res.send({
        status: 200,
        data: result
      })
    })
    .catch(error => {
      res.send({
        status: 500,
        data: error
      })
    })
})

app.post('/user', (req, res) => {
  const { id } = req.body
 // code here
 // userModel.create({name, height, mass} =)
 axios.get( 'https://swapi.dev/api/people/' + id)
    .then(result => {
        const { name, height, mass } = result.data
        userModel.create({name, height, mass})
            .then(result => res.send ({
                status: 200,
                data: result
            }))
        })
    .catch(error => {
        res.send({
        status: 500,
        data: error
        })
    })
    .catch(err => console.log(err))
})

app.put('/user', (req, res) => {
   const { id, name, height, mass } =req.body
   userModel.update({
     where: {
       id,
       name, 
       height, 
       mass,
       created_at: new Date(),
       updated_at: new Date()
     }
   })
   .catch(err => console.log(err));
})

app.delete('/user', (req, res) => {
  const { id } =req.body
  userModel.destroy({
    where: { 
      id,
    }
  })
  .catach(err1 => console.log(err1))
  userModel.findAll(result => res.send ({
    status: 200,
    data: result
  }))
  .catch(err2 => console.log(err2));
})




app.listen(3002, () => {
  console.log('SERVER IS RUNNING ON PORT 3002')
})