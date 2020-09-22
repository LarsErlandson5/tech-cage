const connectDB = require('./db');
const express = require('express');
const Ticket = require('./models/ticket');
const User = require('./models/user')

connectDB();

const app = express();

const cors = require('cors')
app.use(cors())

app.use(express.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
})

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
  Ticket.create(req.body, (err, ticket) => {
    if (err) {
      next(err);
    } else {
      res.send(ticket._id);
    }
  });
});

app.post('/api/validate', async (req, res) => {
  try {

      let user = await User.find();
      //if (!user) return res.status(400).send('Invalid email or password.');

      //const validPassword = await bcrypt.compare(req.body.password, user.password);
    
      //if (!validPassword) return res.status(400).send('Invalid email or password.')


      return res.send(true);
  }
  catch (ex) {
      return res.status(500).send(`Internal Server Error: ${ex}`);
  }
});


app.get('/api/getTicket', (req, res, next) => {
  console.log(req.body, req.query, req.params);
  Ticket.find({_id:req.query.id}, function (err, docs) {
    if (err) {
      next(err);
    } else {
      res.send(docs[0]);
    }
  });
});


// TODO: /api/getProductionLines (and build model)

// TODO: /api/getStations (and build model)

// TODO: /api/updateTicket (id, status, description, resolution)

// TODO: /api/notify (used to notify TE via email[SMTP])

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);