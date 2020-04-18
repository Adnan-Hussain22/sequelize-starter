const express = require("express");
const { connection } = require("./config");
const app = express();
const PORT = 5000;

connection
  .authenticate({
    logging: console.log,
  })
  .then(() => console.log("SQLite connected..."))
  .catch((err) => console.log("Error while connecting SQLite==>", err));

app.listen(PORT, () => console.log("Server listening on PORT " + PORT));
