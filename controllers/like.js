const Like = require('../models/like');

const addLike = async (req, res) => {

  try {

    const like = new Like({
      user: req.user._id,
      post: req.params.postId

    });
    await like.save();
    return res.status(201).send({ message: 'Like added successfully' });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }

};

module.exports = {
  addLike
};