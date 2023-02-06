const express = require('express');
const commentController = require('../controllers/comment');

const router = express.Router();

/**
* @swagger
* / new_comment:
* post:
* summary: Creates a new comment
* requestBody:
* required: true
* content:
* application/json:
* schema:
* type: array
* responses:
*/
router.post('/', commentController.createComment);

/**
* @swagger
* /comment:
* get:
* summary: Returns all comments
* responses:
* 200:
* description: List of comments
* content:
* application/json:
* schema:
* type: array
* items:
* $ref: '#/models/comment.js'
*/

router.get('/', commentController.getComments);

module.exports = router;