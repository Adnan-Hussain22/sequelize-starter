const { Comment } = require("../model");

module.exports = {
  addComment: (req, res) => {
    const { user, post, comment } = req.body;
    console.log('req==>',JSON.stringify(req.body))
    Comment.create({
      userId: user,
      postId: post,
      comment,
    })
      .then((post) => res.json(post))
      .catch((error) => res.status(500).send(error));
  },
};
