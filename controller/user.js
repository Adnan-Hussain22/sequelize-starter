const { User } = require("../model");
const _users = require("../users.json");
const { Op } = require("sequelize");
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
  importDum: (req, res) => {
    User.bulkCreate(_users, { hooks: true, individualHooks: true })
      .then((users) => res.json(users))
      .catch((error) => res.status(500).send(error));
  },
  searchUsers: (req, res) => {
    const { query } = req.params;
    User.findAll({
      where: {
        [Op.or]: [
          {
            firstName: {
              [Op.like]: `%${query}%`,
            },
          },
          {
            lastName: {
              [Op.like]: `%${query}%`,
            },
          },
        ],
      },
    })
      .then((users) => res.json(users))
      .catch((error) => res.status(500).send(error));
  },
  getUserById: (req, res) => {
    const { id } = req.params;
    User.findByPk(id)
      .then((user) => res.json(user))
      .catch((error) => res.status(500).send(error));
  },
  updateUser: (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, email } = req.body;
    const fullName = `${firstName || ""} ${lastName || ""}`.trim();
    const hasFullName = Boolean(fullName.length);
    User.update(
      { firstName, lastName, email, fullName: hasFullName ? fullName : null },
      { where: { uuid: id } }
    )
      .then((users) => res.json(users))
      .catch((error) => res.status(500).send(error));
  },
  deleteUser: (req, res) => {
    const { id } = req.params;
    User.destroy({ where: { uuid: id } })
      .then((user) => res.json(user))
      .catch((error) => res.status(500).send(error));
  },
};
