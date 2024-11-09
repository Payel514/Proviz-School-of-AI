const express = require('express');
const router = express.Router();
const Applicant = require('../models/Applicant');

// POST route to handle form submission
router.post('/apply', async (req, res) => {
  const { name, phone, email, statement } = req.body;
  try {
    const newApplicant = new Applicant({ name, phone, email, statement });
    await newApplicant.save();
    res.status(201).json({ message: 'Application submitted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
