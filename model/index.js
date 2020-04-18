const Sequelize = require("sequelize");
const { connection } = require("../config");
const User = connection.define(
  "User",
  {
    uuid: {
      type: Sequelize.UUID,
      primaryKey: true,
      //If you do not assign this default value than uuid will
      // be null in case no uuid provided
      defaultValue: Sequelize.UUIDV4,
    },
    name: {
      type: Sequelize.STRING,
      validate: {
        len: {
          args: [2], // len: [minLength, maxLength]
          msg: "Error: Name length should be greater than 2",
        },
      },
    },
    bio: {
      type: Sequelize.TEXT, // For long string values
      validate: {
        contains: {
          args: ["hello world"], //xD
          msg: "Error: bio should contain 'hello world'",
        },
      },
    },
  },
  {
    timestamps: false, // when you do not want sequelize to add createAt and updatedAt fields automatically
  }
);
module.exports = { User };
