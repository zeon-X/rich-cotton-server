// models/Product.js
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: String,
  parentCategory: String,
  productCode: String,
  category: String,
  product: String,
  img: String,
  imagesArray: [String],
  fabric: String,
  wash: String,
  price: Number,
  deliveryTime: String,
  slug: String,
  status: String,
});

module.exports = mongoose.model("Product", productSchema);
