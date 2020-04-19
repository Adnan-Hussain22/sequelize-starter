const { Post } = require("./post");
const { User } = require("./user");
Post.belongsTo(User, { foreignKey: "userId" });
module.exports = {
  Post,
  User,
};
