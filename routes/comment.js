const express = require('express');
const router = express.Router();
const commentController = require('../controllers/comment.js');

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
*     Comment:
*       type: object
*       required:
*          -author
*          -commentbody
*       properties:
*        author:
*           type: string
*           description: author of  comment
*        commentbody:
*           type: string
*           description: Body of comment
*  parameters:
*      commentId:
*        name: id
*        in: path
*        description: Id for specified commentId
*        required: true
*        schema:
*           type: string
*/

/**
* @swagger
* tags:
*   name: Comment
*   description: All comments created
*/

/**
* @swagger
*  /comment:
*   post:
*    summary: creating comment
*    tags: [Comment]
*    requestBody:
*      required: true
*      content:
*         application/json:
*           schema:
*             $ref: '#/components/schemas/Comment'
*   responses:
*      200:
*          description: Commnent Created Successfully!
*      400:
*          $ref: '#/components/responses/400'
*/

router.post('/comment', commentController.createComment);

/**
* @swagger
* /comment:
*  get:
*    summary: getting all comments sent
*    tags: [Comment]
*    responses:
*          200:
*            description: All the Comments are here!
*            content:
*               application/json:
*                 schema:
*                    $ref: '#/components/schemas/schemas/Comment'
*/

router.get('/comment', commentController.getComments);

module.exports = router;