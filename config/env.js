require('dotenv/config')
const config = {
  HOST: process.env.HOST,
  DIALECT: process.env.DIALECT,
  STORAGE: process.env.STORAGE,
};
console.log({config})
module.exports = { config };
