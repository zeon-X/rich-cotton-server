const multer = require("multer");
const path = require("path");
const fs = require("fs");

// Define existing upload directory inside `public_html/uploads/`
const uploadDir = path.join(__dirname, "../../public_html/uploads");

// Configure storage (overwrite existing file)
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Ensure the directory exists before uploading
    if (!fs.existsSync(uploadDir)) {
      return cb(new Error("Upload directory does not exist!"));
    }
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const filePath = path.join(uploadDir, "document.pdf");

    // Remove the existing file if it exists
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }

    cb(null, "document.pdf"); // Always overwrite with the same filename
  },
});

const upload = multer({ storage });

// Function to get the latest uploaded PDF
const getPdf = (req, res) => {
  const filePath = path.join(uploadDir, "document.pdf");

  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ message: "No PDF uploaded yet." });
  }

  res.json({ pdf: `https://borderflash.com/uploads/document.pdf` });
};

module.exports = { upload, getPdf };
