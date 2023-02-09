const express = require("express");
const router = express.Router();
const { register, login } = require("../controllers/auth");


/** 
* @swagger
* components:
*  responses:
*          200:
*              description: Success
*          400:
*              description: Bad request
*          401:
*             description: Authorization
*          404:
*             description: Not found
*          500:
*             description: Unexpected error.
*  schemas:
*      User:
*        type: object
*        required:
*             -firstName
*             -lastName
*             -email
*             -password
*             -id
*        properties:
*         firstName:
*             type: string
*             description:  first name of the user
*         lastName:
*             type: string
*             description:  last name of the user
*         email:
*             type: string
*             description: user email address
*         password:
*             type: string
*             description:  password of the user
*         id:
*             type: string
*             description: User Id
*  parameters:
*         userId:
*            name: id
*            in: path
*            description: The Id for specified userId
*            required: true
*            schema:
*                type: string
*/

/**
* @swagger
* tags:
*  name: User
*  description: All users signed up
*/

/**
* @swagger
* /api/register:
*    post:
*       summary: creating user
*       tags: [User]
*       requestBody:
*          required: true
*          content:
*             application/json:
*                schema:
*                   $ref: '#/components/schemas/User'
*       responses:
*         200:
*             description: registered Successfully!
*         400:
*             $ref: '#/components/responses/400'
*/
router.post('/register', register);

/** 
* @swagger
* /api/login:
*    post:
*      summary: Login user
*      tags: [User]
*      requestBody:
*            required: true
*            content:
*               application/json:
*                   schema:
*                      $ref: '#/components/schemas/User'
*      responses:
*          200:
*              description: User logged in Successfully!
*          400:
*              $ref: '#/components/responses/400'
*/
router.post('/login', login);

module.exports = router;