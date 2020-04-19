const bcrypt = require("bcrypt");

module.exports = {
  beforeUserCreate: (user, options) => {
    user.fullName = `${user.firstName} ${user.lastName || ""}`.trim();
    user.password = bcrypt.hashSync(user.password, 10);
  },
};
