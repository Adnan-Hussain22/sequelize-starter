const Sequelize = require("sequelize");
const { connection } = require("../config");
class User extends Sequelize.Model {}
User.init(
  {
    uuid: {
      type: Sequelize.UUID,
      primaryKey: true,
      //If you do not assign this default value than uuid will
      // be null in case no uuid provided
      defaultValue: Sequelize.UUIDV4,
    },
    firstName: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [2], // len: [minLength, maxLength]
          msg: "Error: Name length should be greater than 2",
        },
      },
    },
    lastName: Sequelize.STRING,
    fullName: Sequelize.STRING,
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
    sequelize: connection,
    modelName: "User",
    hooks: {
      beforeValidate: (user, options) => {
        console.log("beforeValidate");
      },
      afterValidate: (user, options) => {
        console.log("afterValidate");
      },
      beforeCreate: (user, options) => {
        console.log("beforeCreate");
        user.fullName = `${user.firstName} ${user.lastName || ""}`.trim();
      },
      afterCreate: (user, options) => {
        console.log("afterCreate");
      },
    },
  }
);
module.exports = { User };
