const { Post } = require("./post");
const { User } = require("./user");
Post.belongsTo(User, {
  foreignKey: "userId",
  // as is used to aliase a master table while populating it in detail
  as: "user",
});
module.exports = {
  Post,
  User,
};
