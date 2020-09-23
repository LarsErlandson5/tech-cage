const mongoose = require('mongoose')

const productionLineSchema = new mongoose.Schema({
  Name: { type: String, required: true }
});

const ProductionLines = mongoose.model('ProductionLines', productionLineSchema);

module.exports = ProductionLines
