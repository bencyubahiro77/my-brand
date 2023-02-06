const express = require("express");

const router = express.Router();
//const Blog = require("../models/blog");
const blogController = require("../controllers/blog");


/**
* @swagger
* /blogs:
* post:
* summary: Creates a new blog
* requestBody:
* required: true
* content:
* application/json:
* responses:
 201: :Blog created successfully
 400: Invalid request body
*/
router.post("/", blogController.createBlog);


/**
* @swagger
* /blogs:
* get:
* summary: Returns all blogs
* responses:
* 200: List of blogs
* content:
* application/json:
* schema:
* type: array
* items:
* $ref: '#/models/blog.js'
*/

router.get("/", blogController.getBlogs);


/**
* @swagger
* /blogs/{id}:
* get:
* summary: Returns a blog by its id
* parameters:
* - in: path
* name: id
* schema:
* type: string
* required: true
* id name of the blog: Id of the blog to retrieve
* responses:
* 200:
* description: Blog details
* content:
* application/json:
* $ref: '#/models/blog.js'
* 404: Blog not found
*/
router.get("/:id", blogController.getBlogById);

/**
* @swagger
* /blogs/{id}:
* put:
* summary: Updates a blog by its id
* parameters:
* - in: path
* name: id
* schema:
* type: string
* needed: true
* description: Id of the blog to update
* requestBody:
* required: true
* content:
*/
router.put("/:id", blogController.updateBlog);


/**
* @swagger
* /blogs/{id}:
* delete:
* summary: Deletes a blog by its id
* parameters:
* - in: path
* name: id
* schema:
* type: string
* required: true
* description: Id of the blog to delete
* responses:
* 200: Blog deleted successfully
* 404: Blog not found
*/
router.delete("/:id", blogController.deleteBlog);
 

module.exports = router;