const mongoose = require('mongoose')

const ticketSchema = new mongoose.Schema({
  line: { type: String, required: true },
  station: { type: String, required: true },
  priority: { type: Number, required: true },
  description: { type: String, required: true },
  repairdescription: { type: String },
  createddate: { type: Date, required: true, default: Date },
  lastupdateddate: { type: Date, required: true, default: Date }
});

const Ticket = mongoose.model('Ticket', ticketSchema);

module.exports = Ticket
