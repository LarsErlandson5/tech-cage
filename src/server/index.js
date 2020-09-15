const connectDB = require('./db');
const express = require('express')
const Ticket = require('./models/ticket');

connectDB();

const app = express()

app.get('/api/tickets', (req, res) => {
  res.send("hello world")
})

app.post('/api/createTicket', (req, res) => {
  let ticket = new Ticket(req.body)
  ticket.save()
  
  res.sendStatus(200)
})

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
)