const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const bcrypt = require("bcrypt");

const SALT_LENGTH = 12;

const User = require("../models/user");
const Suitcase = require("../models/suitcase");
const Suitcase = [
    {
      name: 'toiletries',
      items: [
        { name: 'Toothbrush', packed: false },
        { name: 'Tooth Paste', packed: false },
        { name: 'Body Wash', packed: false },
        { name: 'Shampoo', packed: false },
        { name: 'Deodorant', packed: false },
        { name: 'Hair Brush', packed: false },
        { name: 'Make-up', packed: false },
      ],
    },
    {
      name: 'essentials',
      items: [
        { name: 'Drivers License', packed: false },
        { name: 'Passport', packed: false },
        { name: 'Phone Charger/Cord', packed: false },
        { name: 'Medications', packed: false },
        { name: 'EpiPen', packed: false },
        { name: 'Boarding Pass Downloaded', packed: false },
      ],
    },
    {
      name: 'SpecialityClothes',
      items: [
        { name: 'Dress', packed: false },
        { name: 'Suit', packed: false },
        { name: '', packed: false },
        { name: '', packed: false },
        { name: '', packed: false },
        { name: '', packed: false },
      ],
    },
    {
      name: 'Jackets',
      items: [
        { name: 'Rain Jacket', packed: false },
        { name: 'Light Jacket', packed: false },
        { name: 'Ski Jacket', packed: false },
        { name: 'Hoodie', packed: false },
        { name: 'Sweater', packed: false },
        { name: 'Something', packed: false },
      ],
    },
    {
      name: 'lounge',
      items: [
        { name: 'Athletic Shorts', packed: false },
        { name: 'T-Shirts', packed: false },
        { name: 'Pajamas', packed: false },
        { name: '', packed: false },
        { name: '', packed: false },
        { name: '', packed: false },
      ],
    },
  ];


mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on("connected", async () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
  await User.collection.drop();

  await User.create(
    events.map((event) => {
      let x = {
        username: event.username,
        description: event.description,
      };
      console.log(x);
      return x;
    }),
  );

  console.log("Users Created!");
  process.exit();
});
