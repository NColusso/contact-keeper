const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { body, validationResult } = require("express-validator");

const User = require("../models/User.js");
const Contact = require("../models/Contact.js");

// @route   GET api/contacts
// @desc    Get all users' contacts
// @access  Private
router.get("/", auth, async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user.id }).sort({
      date: -1,
    });
    res.json(contacts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
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
