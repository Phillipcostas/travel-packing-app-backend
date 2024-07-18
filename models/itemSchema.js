const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  packed: {
    type: Boolean,
    default: false
  }
});

module.exports = itemSchema;
