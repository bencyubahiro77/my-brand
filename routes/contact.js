const express = require('express');

const router = express.Router();

const messageController = require('../controllers/contact');

router.post('/', messageController.createMessage);
router.get('/:messageId', messageController.getMessageById);
router.get('/', messageController.getAllMessages);

module.exports = router;