const Sequelize = require("sequelize");
const bcrypt = require("bcrypt");
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
    },
    lastName: Sequelize.STRING,
    fullName: Sequelize.STRING,
    email: {
      allowNull: false,
      type: Sequelize.STRING,
      validate: {
        isEmail: true,
      },
    },
    password: {
      allowNull: false,
      type: Sequelize.STRING,
      validate: {
        isAlphanumeric: true,
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
        user.fullName = `${user.firstName} ${user.lastName || ""}`.trim();
        user.password = bcrypt.hashSync(user.password, 10);
      },
      afterCreate: (user, options) => {
        console.log("afterCreate");
      },
    },
  }
);
module.exports = { User };
