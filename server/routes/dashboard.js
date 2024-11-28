const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Task = require('../models/taskModel');
const authenticateToken = require('../middleware/auth');
const router = express.Router();

router.get('/tasks', authenticateToken,async (req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
  }
);

module.exports = router;