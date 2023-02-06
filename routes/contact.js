const express = require('express');

const router = express.Router();

const messageController = require('../controllers/contact');

/**
* @swagger
* /message:
* post:
* summary: Creates a new message
* requestBody:
* required: true
* content:
* application/json:
* schema:
* type: object
* properties:
* Name: name of the user
* email: email of the user
* message: Content of the message
*/
router.post('/', messageController.createMessage);

/**
* @swagger
* {/message/id}:
* get:
* summary: Returns a message by its id
* parameters:
* - in: path
* name: id
* schema:
* type: string
* required: true
* description: Id of the message to retrieve
* responses:
* 200: message found and provide details
* content:
* application/json:
* $ref: '#/models/contact'
*/

router.get('/:messageId', messageController.getMessageById);

/**
* @swagger
* /contact:
* get:
* summary: Returns all messages
* responses:
* 200:
* description: List of messages
* content:
* application/json:
* schema:
* type: array
* items:
* $ref: '#/models/contact'
*/
router.get('/', messageController.getAllMessages);

module.exports = router;