// const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

const register = async (req, res) => {
try {
const { firstName, lastName, email, password } = req.body;
const hashedPassword = await bcrypt.hash(password, 10);

const user = new User({
firstName,
lastName,
email,
password: hashedPassword
});

const savedUser = await user.save();

const payload = {
userId: savedUser._id,
email: savedUser.email
};

const token = jwt.sign(payload, process.env.JWT_SECRET, {
expiresIn: "2h"
});

res.status(201).json({ message: "User created", user: savedUser, token });
} catch (error) {
res.status(500).json({ message: error.message });
}
};

const login = async (req, res) => {
try {
const { email, password } = req.body;

const user = await User.findOne({ email });
if (!user) {
return res.status(401).json({ message: "Email or password is incorrect" });
}

const isMatch = await bcrypt.compare(password, user.password);
if (!isMatch) {
return res.status(401).json({ message: "Email or password is incorrect" });
}

const payload = {
userId: user._id,
email: user.email
};

const token = jwt.sign(payload, process.env.JWT_SECRET, {
expiresIn: "1h"
});

res.status(200).json({ message: "Login successful", user, token });
} catch (error) {
res.status(500).json({ message: error.message });
}
};

module.exports = {
register,
login
};