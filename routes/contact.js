const express = require('express');
const router = express.Router();
const messageController = require('../controllers/contact');

/**
* @swagger
* components:
*  responses:
*           200:
*              description: Success
*           400:
*              description: Bad request
*           401:
*              description: Authorization
*           404:
*              description: Not found
*           500:
*              description: Unexpected error.
*  schemas:
*     Message:
*       type: object
*       required:
*          -name
*          -email
*          -messagebody
*       properties:
*        name:
*           type: string
*           description: name of th sender
*        email:
*           type: string
*           description: email of the sender
*        messagebody:
*           type: string
*           description: Body of message
*  parameters:
*      messageId:
*        name: id
*        in: path
*        description: Id for specified messageId
*        required: true
*        schema:
*           type: string
*/

/**
* @swagger
* tags:
*   name: Message
*   description: All Messages created
*/

/**
* @swagger
*  /message:
*   post:
*    summary: creating a message
*    tags: [Message]
*    requestBody:
*      required: true
*      content:
*         application/json:
*           schema:
*             $ref: '#/components/schemas/Message'
*   responses:
*      200:
*          description: message Created Successfully!
*      400:
*          $ref: '#/components/responses/400'
*/

router.post('/message', messageController.createMessage);

/**
* @swagger
* /message/{id}:
*  get:
*    summary: get blog
*    tags: [Message]
*    parameters:
*        - $ref: '#/components/parameters/messageId'
*    requestBody:
*        required: true
*        content:
*           application/json:
*                 schema:
*                     $ref: '#/components/schemas/Message'
*    responses:
*         200:
*             description: Successfully found
*         404:
*            description: not found
*/

router.get('/message/:id"', messageController.getMessageById);

/**
* @swagger
* /message:
*  get:
*    summary: getting all messages published
*    tags: [Message]
*    responses:
*       200:
*           description: All message are here!
*           content:
*             application/json:
*               schema:
*                $ref: '#/components/schemas/schemas/Message'
*/
router.get('/message', messageController.getAllMessages);

module.exports = router;