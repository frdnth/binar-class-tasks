const express = require('express');
const bodyParser = require('body-parser');

const AnimalInstance = require('./database')


const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/animal', (req, res) => {
  AnimalInstance.findAll()
    .then((result) => {
      res.send({
        status: 200,
        data: result
      })
    })
    .catch((err) => console.log(err))
})

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> b891ae9767ff1579f8ea2c1d453e8e2d38440045
app.post('/animal', (req, res) => {

  const { id, name, type, birth_date, created_at, updated_at} = req.body;
  var newData = new AnimalInstance();
      newData.id = id;

  const { name, type, birth_date, created_at, updated_at} = req.body;
  var newData = new AnimalInstance();
      newData.id = newData[newData.length-1];

      newData.name = name;
      newData.type = type;
      newData.birth_date = birth_date;
      newData.created_at = created_at;
      newData.updated_at = updated_at;
  // .catch((err) => console.log(err))

        
  })


<<<<<<< HEAD
>>>>>>> 64de1189bc008188ebccb89c45bdcd613b196006
=======
>>>>>>> b891ae9767ff1579f8ea2c1d453e8e2d38440045
app.listen(3002, () => {
  console.log('server running on port 3002')
})

<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 64de1189bc008188ebccb89c45bdcd613b196006
=======
>>>>>>> b891ae9767ff1579f8ea2c1d453e8e2d38440045
