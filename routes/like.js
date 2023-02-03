const express = require('express');
const router = express.Router();
const { addLike } = require('../controllers/like');

// const { authenticate } = require('../middlewares/authenticate');

//router.post('/:postId', authenticate, addLike);

module.exports = router;