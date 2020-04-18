const Sequelize = require("sequelize");
const { connection } = require("../config");
const User = connection.define("User", {
  uuid: {
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
    //If you do not assign this default value than uuid will
    // be null in case no uuid provided
  },
  name: Sequelize.STRING,
  bio: Sequelize.TEXT,
});
module.exports = { User };
