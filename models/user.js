const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        min:6
    },
    password: {
        type: String,
        required: true,
        max:1024,
        min:8
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model("user", userSchema);

module.exports = User;