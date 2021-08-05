const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const pets = [
  { id: 1, name: 'jacky', animal: 'dog' }
]

/*
  HTTP method:
  - GET, POST, PUT DELETE

  CRUD:
  - Create, Read, Update, Delete

  /pets => routing
*/


app.get('/pets', (request, respond) => {
  // proses Read
  respond.send({
    status: 200,
    data: pets
  })
})

app.post('/pets', (request, respond) => {
  // proses Create
  const animalProfile = request.body
  pets.push({
    id: pets.length + 1,
    name: animalProfile.name,
    animal: animalProfile.animal
  })

  respond.send({
    status: 200,
    data: pets
  })
})

app.put('/pets', (request, respond) => {
  // id, name, animal
  // proses lanjut disini
  const animalProfile = request.body;

  pets[animalProfile.id-1]={
    id: animalProfile.id,
    name: animalProfile.name,
    animal: animalProfile.animal
  }

  respond.send({
    status: 200,
    data: pets
  })
})

app.delete('/pets', (request, respond) => {
  // id, name, animal
  // proses lanjut disini
  const animalProfile = request.body;

  for(let i = 0; i < pets.length; i++) {  
    if(pets[i].id == animalProfile.id) {  
      pets.splice([i], 1);                
    }
  }

  
  respond.send({
    status: 200,
    data: pets
  })
})

app.listen(3000, () => {
  console.log('server running on port 3000')
})