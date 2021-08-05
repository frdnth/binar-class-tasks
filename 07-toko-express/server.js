const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const STATUS = ['process', 'delivered']; // ENUM

// ! CRUD items
let items = [ {id: 1, name: 'sabun', price: 2000} ]
app.get('/items', (req, res) => {
  res.send({
    status: 200,
    data: items
  })
})
app.post('/items', (req, res) => {
  const { name, price } = req.body // => name, price
  items.push({
    id: items.length + 1,
    name,
    price
  })
  res.send({
    status: 200,
    data: items
  })

})
app.put('/items', (req, res) => {
  const { id, name, price } = req.body
  items = items.map((item) => {
    if (Number(item.id) === Number(id)) {
      item.name = name
      item.price = price
    }

    return item
  })

  res.send({
    status: 200,
    data: items
  })
})
app.delete('/items', (req, res) => {
  const id = req.body.id
  items = items.filter((item) => Number(item.id) !== Number(id))
  res.send({
    status: 200,
    data: item
  })

})


// ! CRUD buyers
let buyers = [ {id: 1, name: 'bambang', alamat: 'ragunan', handphone: 08131033778} ]
app.get('/buyers', (req, res) => {
  
  res.send({
    status: 200,
    data: buyers
  })
})
app.post('/buyers', (req, res) => {
  const {  name, alamat, handphone} = req.body
  buyers.push({
    id: buyers.length + 1,
    name,
    alamat,
    handphone
  })

  res.send({
    status: 200,
    data: buyers
  })
})
app.put('/buyers', (req, res) => {
  const { id, name, alamat, handphone } = req.body
  buyers = buyers.map((buyer) => {
    if (Number(buyers.id) === Number(id)) {
      buyers.name = name
      buyers.alamat = alamat
      buyers.handphone = handphone
    }

    return buyer
  })

  res.send({
    status: 200,
    data: buyers
  })
})
app.delete('/buyers', (req, res) => {
  const id = req.body.id
  buyers = buyers.filter((buyer) => Number(buyer.id) !== Number(id))

  res.send({
    status: 200,
    data: buyers
  })
})

// Orders
let orders = [{id: 1, item_id: 1, buyer_id: 1, status:STATUS[0], created_at: new Date() , updated_at: new Date() }]
app.get('/orders', (req, res) =>{

  res.send({
    status: 200,
    data: orders
  })
})
app.post('/orders', (req, res) =>{
  const {  item_id, buyer_id} = req.body
  orders.push({
    id: orders.length + 1,
    item_id,
    buyer_id,
    status: STATUS[0],
    created_at: new Date(),
    updated_at: new Date()
  })

  res.send({
    status: 200,
    data: buyers
  })
})
app.put('/orders', (req, res) =>{
  // rubah status & updated_at
  const {id, status} = req.body
  orders = orders.map((order) => {
    if(Number(order.id) === Number(id)) {
      order.status= STATUS[status]
      order.updated_at= new Date()
    }
    return order
  })
  
  res.send({
    status: 200,
    data: orders
  })

})
app.delete('/orders', (req, res) =>{
  const id = req.body.id
  orders = orders.filter((order) => Number(order.id) !== Number(id))
  
  res.send({
    status: 200,
    data: orders
  })

})

app.listen(3002, () => {
  console.log('server running on port 3002')
})


