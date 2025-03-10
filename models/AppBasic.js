// models/Client.js
const mongoose = require("mongoose");

const appBasicSchema = new mongoose.Schema({
  photoGallery: [{ url: String, caption: String }],
});

module.exports = mongoose.model("AppBasic", appBasicSchema);
