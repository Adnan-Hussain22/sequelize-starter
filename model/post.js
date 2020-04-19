const Sequelize = require("sequelize");
const { connection } = require("../config");
class Post extends Sequelize.Model {}
Post.init(
  {
    id: {
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
    },
    title: Sequelize.STRING,
    content: Sequelize.TEXT,
  },
  {
    sequelize: connection,
    modelName: "Post",
  }
);
module.exports = { Post };
