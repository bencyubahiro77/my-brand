const Comment = require('../models/comment.js');

exports.createComment = (req, res) => {
const comment = new Comment({
author: req.body.author,
comment: req.body.comment,
});

comment
.save()
.then(() => {
res.status(201).json({
message: 'Comment created successfully',
});
})
.catch(() => {
res.status(500).json({
error: 'Unable to create comment',
});
});
};

exports.getComments = (req, res) => {
Comment.find()
.then((comments) => {
res.status(200).json(comments);
})
.catch(() => {
res.status(500).json({
error: 'Unable to fetch comments',
});
});
};
