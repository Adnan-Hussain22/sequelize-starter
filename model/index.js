const { Post } = require("./post");
const { User } = require("./user");
const { Comment } = require("./comment");
const { Project } = require("./project");

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

/**Many-To-Many Association*/

//Creates a UserProject table with IDs for ProjectId and UserId
User.belongsToMany(Project, { as: "Tasks", through: "UserProject" });
Project.belongsToMany(User, { as: "Workers", through: "UserProject" });

module.exports = {
  User,
  Post,
  Comment,
  Project,
};
