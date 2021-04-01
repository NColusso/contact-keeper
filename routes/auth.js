const express = require("express");
const router = express.Router();

const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");

const User = require("../models/User.js");

// @route   GET api/auth
// @desc    Get logged in user user
// @access  Private
router.get("/", (req, res) => {
  res.send("Getting logged in user");
});

// @route   POST api/auth
// @desc    Authorize user & get token
// @access  Public
router.post(
  "/",
  [
    body("email", "Please use a valid email address").isEmail(),
    body("password", "Please type your password").exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ msg: "Invalid user or password" });
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ msg: "Invalid user or password" });
      }
      const payload = {
        user: { id: user.id },
      };
      jwt.sign(
        payload,
        config.get("jwtSecret"),
        {
          expiresIn: 360000,
        },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
