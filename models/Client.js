// models/Client.js
const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
  title: String,
  img: String,
});

module.exports = mongoose.model("Client", clientSchema);
