const Sequelize = require("sequelize");
const { connection } = require("../config");
const userHooks = require("../hooks/users");
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
        notEmpty: {
          msg: "User firstname should not be null",
        },
      },
    },
    lastName: Sequelize.STRING,
    fullName: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "User name should not be null",
        },
      },
    },
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
      beforeCreate: userHooks.beforeUserCreate,
      afterCreate: (user, options) => {
        console.log("afterCreate");
      },
    },
  }
);
module.exports = { User };
