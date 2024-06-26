const Product = require("../models/Product");

// Create a new product
exports.createProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all products
exports.getProducts = async (req, res) => {
  // console.log("hit");
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get a single product by ID
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get a single product by ID
exports.getProductByProductId = async (req, res) => {
  // console.log("hit");
  try {
    const product = await Product.find({ productCode: req.params.id });
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.status(200).json(product[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
// Get a single product by ID
exports.getProductByProductSlug = async (req, res) => {
  // console.log("hit");
  try {
    const product = await Product.find({ slug: req.params.id });
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.status(200).json(product[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
// Get a single product by category
exports.getProductByProductCategory = async (req, res) => {
  // console.log("hit getProductByProductCategory");
  try {
    const product = await Product.find({ parentCategory: req.params.id });
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    // console.log("product", product);
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
// Get a single product by ID
exports.getProductByProductSubCategory = async (req, res) => {
  // console.log("hit");
  try {
    const product = await Product.find({ category: req.params.id });
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a product by ID
exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true, // Return the updated product
    });
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.status(200).json(product);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete a product by ID
exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndRemove(req.params.id);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
