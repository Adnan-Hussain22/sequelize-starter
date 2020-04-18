const Sequelize = require("sequelize");
const { CONNECTION } = require("../config");
const User = CONNECTION.define("User", {
  name: Sequelize.STRING,
  bio: Sequelize.TEXT,
});
module.exports = { User };
