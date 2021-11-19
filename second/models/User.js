const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

const User =  mongoose.models.User || mongoose.model('user', userSchema);

module.exports = User;