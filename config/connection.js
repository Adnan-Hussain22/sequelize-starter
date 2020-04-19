const Sequelize = require("sequelize");
const { config } = require("./env");
const connection = new Sequelize(
  config.DATABASE,
  config.USERNAME,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.DIALECT,
    storage: config.STORAGE,
    operatorsAliases: 0,
    // define is used for global customization for your
    define: {
      freezeTableName: true, // used when you want your provided table name to be
      // matched exactled in sql table
    },
  }
);

connection
  .sync({
    // sync is used to create table automatically by sequelize
    logging: console.log,
  })
  .then(() => console.log("SQLite connected..."))
  .catch((err) => console.log("Error while connecting SQLite==>", err));

module.exports = { connection };
