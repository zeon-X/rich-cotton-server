// models/Product.js
const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema({
  slug: String,
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
});

module.exports = mongoose.model("Team", teamSchema);
