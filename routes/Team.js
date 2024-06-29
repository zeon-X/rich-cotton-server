const express = require("express");
const router = express.Router();
const teamController = require("../controllers/teamController");

// Create a new team
router.post("/", teamController.createTeam);

// Create multiple team
// router.post("/multiple", teamController.createTeamsMultiple);

// Get all teams
router.get("/get", teamController.getTeams);

// Get a single team by ID
router.get("/:id", teamController.getTeamById);

// Update a team by ID
router.post("/update/:id", teamController.updateTeam);

// Delete a team by ID
router.delete("/:id", teamController.deleteTeam);

module.exports = router;
