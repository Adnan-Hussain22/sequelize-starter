const { Post } = require("../model");

module.exports = {
  createPost: (req, res) => {
    const { user, title, content } = req.body;
    Post.create({
      UserId: user,
      title,
      content,
    });
  },
};
