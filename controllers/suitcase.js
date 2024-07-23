const express = require('express');
const verifyToken = require('../middleware/verify-token');
const Suitcase = require('../models/suitcase');
const router = express.Router();


router.use(verifyToken);

router.post('/', async (req, res) => {
    try {
      req.body.author = req.user._id;
      const suitcase = await Suitcase.create(req.body);
      suitcase._doc.author = req.user;
      res.status(201).json(suitcase);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  });
  

router.get('/', async (req, res) => {
  try {
    const suitcase = await Suitcase.find({})
      .sort({ createdAt: 'desc' });
    res.status(200).json(suitcase);
  } catch (error) {
    res.status(500).json(error);
  }
});


router.get('/:suitcaseId', async (req, res) => {
  try {
    const suitcase= await Suitcase.findById(req.params.suitcaseId);
    res.status(200).json(suitcase);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.put('/:suitcaseId', async (req, res) => {
  try {
    const suitcase = await Suitcase.findById(req.params.hootId);
    if (!suitcase.author.equals(req.user._id)) {
      return res.status(403).send("You're not allowed to do that!");
    }
    const updatedSuitcase = await Suitcase.findByIdAndUpdate(
      req.params.suitcaseId,
      req.body,
      { new: true }
    );
    updatedSuitcase._doc.author = req.user;
    res.status(200).json(updatedSuitcase);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete('/:suitcaseId', async (req, res) => {
  try {
    const suitcase = await Suitcase.findById(req.params.suitcaseId);

    if (!suitcase.author.equals(req.user._id)) {
    return res.status(403).send("You're not allowed to do that!");
    }

    const deletedSuitcase = await Suitcase.findByIdAndDelete(req.params.suitcaseId);
    res.status(200).json(deletedSuitcase);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;