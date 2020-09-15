const connectDB = require('./db');
const express = require('express');
const Ticket = require('./models/ticket');

connectDB();

const app = express();

app.use(express.json());

app.get('/api/health', (req, res) => {
  res.sendStatus(200);
});

app.get('/api/getTickets', (req, res, next) => {
  Ticket.find({}, function (err, docs) {
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

// TODO: /api/getTicket (GET ticket by ID)

// TODO: /api/getProductionLines (and build model)

// TODO: /api/getStations (and build model)

// TODO: /api/updateTicket (id, status, description, resolution)

// TODO: /api/notify (used to notify TE via email[SMTP])

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);