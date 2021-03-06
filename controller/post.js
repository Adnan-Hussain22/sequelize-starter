const { Post, User, Comment } = require("../model");

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
      include: [
        {
          model: User,
          as: "user", // alias of master table
        },
        {
          model: Comment,
          as: "comments",
        },
      ],
    })
      .then((posts) => res.json(posts))
      .catch((error) => res.status(500).send(error));
  },
};
