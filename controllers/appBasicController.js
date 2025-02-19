const AppBasic = require("../models/AppBasic");

// Get app basic
exports.getAppBasic = async (req, res) => {
  try {
    const appBasic = await AppBasic.find();
    res.status(200).json(appBasic);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a team by ID
exports.updateAppBasic = async (req, res) => {
  try {
    const appBasic = await AppBasic.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      {
        new: true, // Return the updated product
      }
    );
    if (!appBasic) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.status(200).json(appBasic);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// USER RARE

exports.createAppBasic = async (req, res) => {
  try {
    const appBasic = new AppBasic(req.body);
    await appBasic.save();
    res.status(201).json(appBasic);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteAppBasic = async (req, res) => {
  // console.log(req);
  try {
    const appBasic = await AppBasic.findByIdAndRemove(req.params.id);
    if (!appBasic) {
      return res.status(404).json({ error: "Client not found" });
    }
    res.json({ message: "Client deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
