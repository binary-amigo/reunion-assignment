const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userRoutes = require('./routes/userRoute');
const dashboardRoutes = require('./routes/dashboard');
const taskRoutes = require('./routes/taskRoute');
const cors = require('cors');

const app = express();
const PORT = 3000;
app.use(cors());
const JWT_SECRET = process.env.JWT_SECRET;
mongoose.connect(process.env.MONGODB_URI, )
    .then(() => {
      console.log('Connected to MongoDB');
    })
    .catch((err) => {
      console.error('Failed to connect to MongoDB:', err);
    });

app.use(express.json());



app.use('/', userRoutes);
app.use('/dashboard', dashboardRoutes);
app.use('/tasks', taskRoutes);

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
