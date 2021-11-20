const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
    name: String,
    email: String,
    password: String
});

global.userSchema = global.userSchema || mongoose.model('User', userSchema);
module.exports = global.userSchema;