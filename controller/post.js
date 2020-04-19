const { Post, User } = require("../model");

module.exports = {
  createPost: (req, res) => {
    const { user, title, content } = req.body;
    Post.create({
      userId: user,
      title,
      content,
    })
      .then((post) => res.json(post))
      .catch((error) => res.status(500).send(error));
  },
  getPosts: (_, res) => {
    Post.findAll({
      include: [User],
    })
      .then((posts) => res.json(posts))
      .catch((error) => res.status(500).send(error));
  },
};
