const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    role: {type: String, enum: ['usesr', 'admin'], default: 'user' },
})

module.exports = mongoose.model('User', userSchema);

