const Blog = require("../models/blog");

// create a blog

exports.createBlog = async (req, res) => {
try {
const blog = new Blog({
title: req.body.title,
//image: req.body.image,
content: req.body.content
});
const savedBlog = await blog.save();
res.status(201).json({
message: "Blog created successfully",
createdBlog: savedBlog
});
} catch (err) {
res.status(500).json({
error: err.message
});
}
};

// get all blogs

exports.getBlogs = async (req, res) => {
try {
const blogs = await Blog.find();
res.status(200).json({
message: "Blogs fetched successfully",
blogs: blogs
});
} catch (err) {
res.status(500).json({
error: err.message
});
}
};

// get a blog by id

exports.getBlogById = async (req, res) => {
try {
const id = req.params.id;
const blog = await Blog.findById(id);
if (!blog) {
return res.status(404).json({
message: "Blog not found"
});
}
res.status(200).json({
message: "Blog fetched successfully",
blog: blog
});
} catch (err) {
res.status(500).json({
error: err.message
});
}
};

// update a blog by id

exports.updateBlog = async (req, res) => {
try {
const id = req.params.id;
const updateOps = {};
for (const ops of req.body) {
updateOps[ops.propName] = ops.value;
}
const updatedBlog = await Blog.updateOne({ _id: id }, { $set: updateOps });
if (!updatedBlog) {
return res.status(404).json({
message: "Blog not found"
});
}
res.status(200).json({
message: "Blog updated successfully",
updatedBlog: updatedBlog
});
} catch (err) {
res.status(500).json({
error: err.message
});
}
};

// delete a blog by id

exports.deleteBlog = async (req, res) => {
try {
const id = req.params.id;
const deletedBlog = await Blog.deleteOne({ _id: id });
if (!deletedBlog) {
return res.status(404).json({
message: "Blog not found"
});
}
res.status(200).json({
message: "Blog deleted successfully",
deletedBlog: deletedBlog
});
} catch (err) {
res.status(500).json({
error: err.message
});
}
};
