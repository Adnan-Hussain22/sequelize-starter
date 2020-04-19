const { Post } = require("./post");
const { User } = require("./user");
const { Comment } = require("./comment");

/*One-To-One Association*/
Post.belongsTo(User, {
  foreignKey: "userId",
  // as is used to aliase a master table while populating it in detail
  as: "user",
});
Comment.belongsTo(User, {
  foreignKey: { name: "userId", allowNull: false },
  as: "user",
});

/*One-To-Many Association*/
Post.hasMany(Comment, {
  foreignKey: { name: "postId", allowNull: false },
  as: "comments",
  foreignKeyConstraint: true,
});

module.exports = {
  User,
  Post,
  Comment,
};
