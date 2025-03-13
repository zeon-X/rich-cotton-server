const express = require("express");
const router = express.Router();
const appBasicController = require("../controllers/appBasicController");
const uploadFile = require("../utils/UploadFile");

// Get all clients
router.get("/get", appBasicController.getAppBasic);

// Update a client by ID
router.post("/update/:id", appBasicController.updateAppBasic);

// RARE USED

// router.post("/", appBasicController.createAppBasic);
// router.delete("/:id", appBasicController.deleteAppBasic);

// Upload Single PDF (Overwrite Existing)
router.post(
  "/upload-single-pdf",
  uploadFile.upload.single("pdf"),
  (req, res) => {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }
    res.json({ fileUrl: `https://richcotton.net/uploads/document.pdf` });
  }
);

// Get Single PDF
router.get("/pdf", uploadFile.getPdf);

module.exports = router;
