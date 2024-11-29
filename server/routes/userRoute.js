const express = require("express");
const mongoose = require("mongoose");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const authenticateToken = require("../middleware/auth");
const router = express.Router();

// Signup Route
router.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const userExists = await User.findOne({
    email,
  });
  if (userExists) {
    return res.status(401).json({ message: "User already exists" });
  }
  try {
    const newUser = await User.create({ email, password: hashedPassword });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(402).json({ message: "Error occured" });
  }
});

// Login Route
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ error: "Invalid credentials" });
  }
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
  console.log(token);
  res.status(201).json({ token });
});

module.exports = router;