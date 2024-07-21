const mongoose = require('mongoose');


const suitcase = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  packed: {
    type: Boolean,
    default: false
  },

  category: {
    type: String,
    required: true,
    enum: ['toiletries', 'essentials', 'SpecialityClothes', 'Jackets', 'lounge']
  },
});

module.exports = suitcase;
