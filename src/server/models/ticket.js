const mongoose = require('mongoose')

const ticketSchema = new mongoose.Schema({
    line: String,
    station: String,
    priority: Number,
    description: String,
  });

  const ticketModel = mongoose.model('ticket', ticketSchema);

  exports.ticketModel = ticketModel