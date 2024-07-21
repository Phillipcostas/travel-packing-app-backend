const mongoose = require('mongoose');
// const categorySchema = require('./categorySchema');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  hashedPassword: {
    type: String,
    required: true
  },
})
  userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      delete returnedObject.hashedPassword;
    }
  }),
  
  module.exports = mongoose.model('User', userSchema);





