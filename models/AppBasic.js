// models/Client.js
const mongoose = require("mongoose");

const appBasicSchema = new mongoose.Schema({
  photoGallery: [],
});

module.exports = mongoose.model("AppBasic", appBasicSchema);
