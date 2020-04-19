const Sequelize = require("sequelize");
const { connection } = require("../config");
class Project extends Sequelize.Model {}
Project.init(
  {
    title: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [3],
          msg: "Project title should be greater than 5 characters",
        },
      },
    },
    description: Sequelize.TEXT,
  },
  {
    sequelize: connection,
    modelName: "Project",
  }
);
module.exports = { Project };
