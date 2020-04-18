const express = require("express");
const bodyParser = require("body-parser");
const { connection } = require("./config");
const { User } = require("./model");
const app = express();
const PORT = 5000;

app.use(bodyParser.json()); //parse the string body

connection
  .sync({
    // sync is used to create table automatically by sequelize
    logging: console.log,
    force: true, // Drops the table if it already exist
    // do this only when you know what you are doing or when you have changed the schema
  })
  .then(() => console.log("SQLite connected..."))
  .catch((err) => console.log("Error while connecting SQLite==>", err));

app.get("/", (req, res) => {
  User.findAll()
  .then((result)=> res.json(result))
  .catch((error)=> res.status(500).send(error))
});

app.post("/", (req, res) => {
  const { firstName, lastName, bio } = req.body;
  User.create({
    firstName,
    lastName,
    bio,
  })
    .then((user) => res.json(user))
    .catch((error) => res.status(500).send(error));
});

app.listen(PORT, () => console.log("Server listening on PORT " + PORT));
