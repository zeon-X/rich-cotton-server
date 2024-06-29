// models/Team.js
const mongoose = require("mongoose");

// Schema definition
const teamSchema = new mongoose.Schema({
  slug: {
    type: String,
    unique: true,
    trim: true,
  },
  status: Boolean,
  name: String,
  position: String,
  phone: String,
  email: String,
  details: String,
  social: {
    fb: String,
    insta: String,
    linkedin: String,
    twitter: String,
  },
  image: String,
  priority: { type: Number, required: true },
});

module.exports = mongoose.model("Team", teamSchema);
