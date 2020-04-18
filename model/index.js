const Sequelize = require("sequelize");
const { connection } = require("../config");
const User = connection.define(
  "User",
  {
    uuid: {
      type: Sequelize.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
      //If you do not assign this default value than uuid will
      // be null in case no uuid provided
    },
    name: Sequelize.STRING,
    bio: Sequelize.TEXT,
  },
  {
    timestamps: false // when you do not want sequelize to add createAt and updatedAt fields automatically

  }
);
module.exports = { User };
