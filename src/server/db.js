const mongoose = require('mongoose');
const config = require('./config/default.json');

function connectDB() {
  mongoose.connect(
    config.mongoURI,
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB...'))
    .catch((err) => {
      console.log(`Could not connect to MongoDB. ERROR: ${err}`);
      process.exit(1);
    });
}

module.exports = connectDB;
