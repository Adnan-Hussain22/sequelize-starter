require('dotenv/config')
const config = {
  HOST: process.env.HOST,
  DIALECT: process.env.DIALECT,
  STORAGE: process.env.STORAGE,
  DATABASE: process.env.DATABASE,
  USERNAME: process.env.USERNAME,
  PASSWORD: process.env.PASSWORD
};
console.log({config})
module.exports = { config };
