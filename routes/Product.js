const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

// Create a new product
router.post("/", productController.createProduct);

// Get all products
router.get("/get", productController.getProducts);

// Get a single product by ID
router.get("/:id", productController.getProductById);

// Get a single product by ID
router.get("/findByProductId/:id", productController.getProductByProductId);

// Get a single product by ID
router.get(
  "/findByCategory/:id",
  productController.getProductByProductCategory
);

router.get(
  "/findBySubCategory/:id",
  productController.getProductByProductSubCategory
);

// Update a product by ID
router.post("/update/:id", productController.updateProduct);

// Delete a product by ID
router.delete("/:id", productController.deleteProduct);

module.exports = router;
