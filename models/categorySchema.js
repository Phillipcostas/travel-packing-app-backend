const mongoose = require('mongoose');
const itemSchema = require('./itemSchema');

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  items: {
    type: [itemSchema],
    default: []
  }
});

module.exports = categorySchema;
