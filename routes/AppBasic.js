const express = require("express");
const router = express.Router();
const appBasicController = require("../controllers/appBasicController");

// Get all clients
router.get("/get", appBasicController.getAppBasic);

// Update a client by ID
router.post("/update/:id", appBasicController.updateAppBasic);

// RARE USED
// router.post("/", appBasicController.createAppBasic);
// router.delete("/:id", appBasicController.deleteAppBasic);

module.exports = router;
