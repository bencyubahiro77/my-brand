const express = require("express");

const router = express.Router();
//const Blog = require("../models/blog");
const blogController = require("../controllers/blog");

// create blog
router.post("/", blogController.createBlog);
// get all blogs
router.get("/", blogController.getBlogs);
// get a blog by id
router.get("/:id", blogController.getBlogById);
// update a blog by id
router.put("/:id", blogController.updateBlog);
// delete a blog by id
router.delete("/:id", blogController.deleteBlog);

module.exports = router;