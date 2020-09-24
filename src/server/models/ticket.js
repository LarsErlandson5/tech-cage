const mongoose = require('mongoose')

const ticketSchema = new mongoose.Schema({
  line: { type: String, required: true },
  station: { type: String, required: true },
  priority: { type: Number, required: true },
  description: { type: String, required: true },
  repairDescription: { type: String },
  createdDate: { type: Date, required: true, default: Date },
  lastUpdatedDate: { type: Date, required: true, default: Date },
  status: { type: String, default: 'Open' },
  image: { type: String }
});

const Ticket = mongoose.model('Ticket', ticketSchema);

module.exports = Ticket
