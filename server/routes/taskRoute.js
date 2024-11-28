const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Task = require('../models/taskModel');
const authenticateToken = require('../middleware/auth');
const router = express.Router();


router.get('/tasks',authenticateToken ,async (req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
  }
);

router.post('/tasks',authenticateToken ,async (req, res) => {
    const { name, status, priority, dueDate } = req.body;
    const newTask = await Task.create({ name, status, priority, dueDate });
    res.status(201).json(newTask);
  }
);

router.delete('/tasks/:id',authenticateToken, async (req, res) => {
    const { id } = req.params;
    await Task.findByIdAndDelete(id);
    res.status(204).end();
  }
);

module.exports = router;