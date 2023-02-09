const express = require("express");
const router = express.Router();
//const Blog = require("../models/blog");
const blogController = require("../controllers/blog");

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
*     Blog:
*       type: object
*       required:
*          -title
*          -blogbody
*          -imageUrl
*          -id
*       properties:
*        title:
*           type: string
*           description: title of blog
*        blogbody:
*           type: string
*           description: Body of blog
*        imageUrl:
*           type: string
*           description: image link
*        id:
*           type: string
*           description: Id of the blog
*  parameters:
*      blogId:
*        name: id
*        in: path
*        description: Id for specified blogId
*        required: true
*        schema:
*           type: string
*/

/**
* @swagger
* tags:
*  name: Blog
*  description: All Blogs created
*/


/**
* @swagger
*  /blog:
*   post:
*    summary: creating blog
*    tags: [Blog]
*    requestBody:
*      required: true
*      content:
*         application/json:
*           schema:
*             $ref: '#/components/schemas/Blog'
*   responses:
*      200:
*          description: Blogs Created Successfully!
*      400:
*          $ref: '#/components/responses/400'
*/
router.post("/blog", blogController.createBlog);
/**
* @swagger
* /blog:
*  get:
*    summary: getting all blogs published
*    tags: [Blog]
*    responses:
*       200:
*           description: All blogs is here!
*           content:
*             application/json:
*               schema:
*                 type: array
*               items:
*                $ref: '#/components/schemas/schemas/Blog'
*/

router.get("/blog", blogController.getBlogs);
/**
* @swagger
* /blog/{id}:
*  get:
*    summary: get blog
*    tags: [Blog]
*    parameters:
*        - $ref: '#/components/parameters/blogId'
*    requestBody:
*        required: true
*        content:
*           application/json:
*                 schema:
*                     $ref: '#/components/schemas/Blog'
*    responses:
*         200:
*             description: Successfully found
*         400:
*             $ref: '#/components/responses/400'
*         401:
*             $ref: '#/components/responses/401'
*         404:
*            description: not found
*/

router.get("/blog/:id", blogController.getBlogById);

/**
* @swagger
* /blog/{id}:
*  patch:
*    summary: updating blogs
*    tags: [Blog]
*    parameters:
*        - $ref: '#/components/parameters/blogId'
*    requestBody:
*        required: true
*        content:
*           application/json:
*                 schema:
*                     $ref: '#/components/schemas/Blog'
*    responses:
*         200:
*             description: Success update
*         400:
*             $ref: '#/components/responses/400'
*         401:
*             $ref: '#/components/responses/401'
*         404:
*            description: not found
*/
router.patch("/blog/:id", blogController.updateBlog);

/**
* @swagger
*  /blogs/{id}:
*    delete:
*     summary: Delete one blog
*     tags: [Blog]
*     parameters:
*         - $ref: '#/components/parameters/blogId'
*     responses:
*        200:
*         description: Blog deleted
*        401:
*         description: Unauthorized
*        404:
*         description: not found
*/
router.delete("/blog/:id", blogController.deleteBlog);
 

module.exports = router;