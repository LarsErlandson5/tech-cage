const connectDB = require('./db');
const express = require('express');
const Ticket = require('./models/ticket');

connectDB();

const app = express();

app.use(express.json());

app.get('/api/health', (req, res) => {
  res.sendStatus(200);
});

app.get('/api/getTickets', async (req, res, next) => {
  await Ticket.find({}, function (err, docs) {
    if (err) {
      next(err);
    } else {
      res.send(docs);
    }
  });
});

app.post('/api/createTicket', (req, res, next) => {
  Ticket.create(req.body, (err) => {
    if (err) {
      next(err);
    } else {
      res.sendStatus(200);
    }
  });
});

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);