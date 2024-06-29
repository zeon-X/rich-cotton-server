// models/Product.js
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: String,
  parentCategory: String,
  productCode: { type: String, unique: true, trim: true },
  category: String,
  product: String,
  img: String,
  imagesArray: [String],
  fabric: String,
  wash: String,
  price: String,
  deliveryTime: String,
  slug: { type: String, trim: true },
  status: String,
});

module.exports = mongoose.model("Product", productSchema);
