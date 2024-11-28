const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        required: true,
        default: false
    },
    priority: {
        type: Number,
        required: true,
        default: 5
    },
    startTime: {
        type: Date,
        required: true,
        default: Date.now()
    },
    endTime: {
        type: Date,
        required: true,
    }
});

module.exports = mongoose.model('Task', taskSchema);