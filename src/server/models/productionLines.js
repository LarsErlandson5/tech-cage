const mongoose = require('mongoose')

const productionLineSchema = new mongoose.Schema({
  Name: { type: String, required: true }
}, { collection : 'ProductionLines' });

const ProductionLines = mongoose.model('ProductionLines', productionLineSchema);

module.exports = ProductionLines
