const Sequelize = require("sequelize");
const { connection } = require("../config");
class Comment extends Sequelize.Model {}
Comment.init(
  {
    comment: Sequelize.TEXT,
  },
  {
    sequelize: connection
  }
);
module.exports = { Comment };
