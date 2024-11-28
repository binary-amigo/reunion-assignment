import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    status: {
        type: boolean,
        required: true,
        default: false
    },
    priority: {
        type: Number,
        required: true,
        default: 5
    },
    dueDate: {
        type: Date,
        required: true
    },
    createdOn: {
        type: Date,
        required: true,
        default: Date.now
    }
});

module.exports = mongoose.model('Task', taskSchema);