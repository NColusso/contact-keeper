const express = require("express");
const router = express.Router();

// @route   GET api/contacts
// @desc    Get all users' contacts
// @access  Private
router.get("/", (req, res) => {
  res.send("Getting all contacts");
});

// @route   POST api/contacts
// @desc    Add a new contact
// @access  Private
router.post("/", (req, res) => {
  res.send("Adding new contact");
});

// @route   PUT api/contacts
// @desc    Update contact
// @access  Private
router.put("/:id", (req, res) => {
  res.send("Updating contact");
});

// @route   DELETE api/contacts
// @desc    Delete contact
// @access  Private
router.delete("/:id", (req, res) => {
  res.send("Deleting contact");
});

module.exports = router;
