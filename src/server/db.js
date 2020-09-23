const mongoose = require('mongoose');

require('dotenv').config();

function connectDB() {
  mongoose.connect(
    process.env.REACT_APP_MONGO_URI,
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB...'))
    .catch((err) => {
      console.log(`Could not connect to MongoDB. ERROR: ${err}`);
      process.exit(1);
    });
}

module.exports = connectDB;
