const { User } = require("../model");

module.exports = {
  getUsers: (req, res) => {
    User.findAll()
      .then((result) => res.json(result))
      .catch((error) => res.status(500).send(error));
  },
  createUser: (req, res) => {
    const { firstName, lastName, password, email } = req.body;
    User.create({
      firstName,
      lastName,
      email,
      password,
    })
      .then((user) => res.json(user))
      .catch((error) => res.status(500).send(error));
  },
};
