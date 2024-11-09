const mongoose = require('mongoose');

const ApplicantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  statement: { type: String }
});

module.exports = mongoose.model('Applicant', ApplicantSchema);
