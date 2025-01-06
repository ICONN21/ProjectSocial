const mongoose = require('mongoose');

const everntSchema = new mongoose.Schema({
    title: String,
    date: Date,
    maxParticipants: Number,
    participants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
})

module.exports = mongoose.model('Event', eventSchema);
