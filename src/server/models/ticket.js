const mongoose = require('mongoose')

const ticketSchema = new mongoose.Schema({
    line: String,
    station: String,
    priority: Number,
    description: String,
  });

const Ticket = mongoose.model('Ticket', ticketSchema);

module.exports = Ticket