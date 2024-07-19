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


//   suitcase: {
//     type: [categorySchema],
//     default: [
//       {
//         name: 'toiletries',
//         items: [
//           { name: 'Toothbrush', packed: false },
//           { name: 'Tooth Paste', packed: false },
//           { name: 'Body Wash', packed: false },
//           { name: 'Shampoo', packed: false },
//           { name: 'Deodorant', packed: false },
//           { name: 'Hair Brush', packed: false },
//           { name: 'Make-up', packed: false }
//         ]
//       },
//       {
//         name: 'essentials',
//         items: [
//           { name: 'Drivers License', packed: false },
//           { name: 'Passport', packed: false },
//           { name: 'Phone Charger/Cord', packed: false },
//           { name: 'Medications', packed: false },
//           { name: 'EpiPen', packed: false },
//           { name: 'Boarding Pass Downloaded', packed: false }
//         ]
//       },
//       {
//         name: 'SpecialityClothes',
//         items: [
//           { name: 'Dress', packed: false },
//           { name: 'Suit', packed: false },
//           { name: '', packed: false },
//           { name: '', packed: false },
//           { name: '', packed: false },
//           { name: '', packed: false }
//         ]
//       },
//       {
//         name: 'Jackets',
//         items: [
//           { name: 'Rain Jacket', packed: false },
//           { name: 'Light Jacket', packed: false },
//           { name: 'Ski Jacket', packed: false },
//           { name: 'Hoodie', packed: false },
//           { name: 'Sweater', packed: false },
//           { name: 'Something', packed: false }
//         ]
//       },
//       {
//         name: 'lounge',
//         items: [
//           { name: 'Athletic Shorts', packed: false },
//           { name: 'T-Shirts', packed: false },
//           { name: 'Pajamas', packed: false },
//           { name: '', packed: false },
//           { name: '', packed: false },
//           { name: '', packed: false }
//         ]
//       }
//     ]
//   }
// });


