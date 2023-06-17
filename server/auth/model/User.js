const db = require("../config/db.config");

const User = function (user) {
  this.firstname = user.firstname;
  this.lastname = user.lastname;
  this.email = user.email;
  this.password = user.password;
  this.role = user.role;
};

User.create = (newUser, result) => {
  db.query("INSERT INTO users SET ?", newUser, (err, res) => {
    if (err) {
      console.error(err);
      result(err, null);
      return;
    }

    result(null, res.insertId);
  });
};

User.getByEmail = (email, result) => {
  db.query("SELECT * FROM users WHERE email = ?", [email], (err, res) => {
    if (err) {
      console.error(err);
      result(err, null);
      return;
    }

    if (res.length) {
      result(null, res[0]);
      return;
    }

    result(null, null);
  });
};

module.exports = User;
