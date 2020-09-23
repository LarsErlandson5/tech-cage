const mongoose = require('mongoose')

const testStationsSchema = new mongoose.Schema({
  Name: { type: String, required: true }
});

const TestStations = mongoose.model('TestStations', testStationsSchema);

module.exports = TestStations
