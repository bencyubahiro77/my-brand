const express = require('express');
const Contact = require('../models/contact');

const router = express.Router();

router.post('/contact', (req, res) => {
const contact = new Contact({
name: req.body.name,
email: req.body.email,
message: req.body.message,
});

contact.save((err) => {
if (err) {
res.send(err);
} else {
res.send('Message Sent!');
}
});
});

module.exports = router;