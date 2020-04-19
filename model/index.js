const { Post } = require("./post");
const { User } = require("./user");
Post.belongsTo(User);
module.exports = {
  Post,
  User,
};
