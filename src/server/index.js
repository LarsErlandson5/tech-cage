const connectDB = require('./db');
const express = require('express')
const bodyParser = require('body-parser')
const axios = require('axios')
const ticket = require('./models/ticket');
const { default: Ticket } = require('../app/pages/QueuePage/Ticket');

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0

connectDB();

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/api/tickets', (req, res) => {
  res.send("hello world")
})

app.post('/api/createTicket', (req, res) => {
  console.log('sent ticket', req.body)
  let ticket = new Ticket(req.body)
  ticket.save()
  res.sendStatus(200)
})

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
)