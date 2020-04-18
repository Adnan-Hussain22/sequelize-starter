require('dotenv/config')
const config = {
  HOST: process.env.HOST,
  DIALECT: process.env.DIALECT,
  STORAGE: process.env.STORAGE,
  DATABASE: process.env.DATABASENAME,
  USERNAME: process.env.USERNAME,
  PASSWORD: process.env.PASSWORD
};
module.exports = { config };
