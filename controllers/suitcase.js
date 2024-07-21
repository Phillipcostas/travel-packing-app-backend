// controllers/hoots.js

const express = require('express');
const verifyToken = require('../middleware/verify-token.js');
const Suitcase = require('../models/suitcase.js');
const router = express.Router();

// ========== Public Routes ===========

// ========= Protected Routes =========

router.use(verifyToken);

router.post('/', async (req, res) => {
    try {
      req.body.author = req.user._id;
      const suitcase = await Suitcase.create(req.body);
      res.status(201).json(suitcase);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  });
  

module.exports = router;
