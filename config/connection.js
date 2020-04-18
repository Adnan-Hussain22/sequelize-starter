const Sequelize = require("sequelize");
const { config } = require("./env");
const connection = new Sequelize("db", "user", "pass", {
  host: config.HOST,
  dialect: config.DIALECT,
  storage: config.STORAGE,
  operatorsAliases: 0,
});
module.exports = { connection };
