// const connection = require("../config/db");

// class User {
//   static create(userData) {
//     return new Promise((resolve, reject) => {
//       const { firstname, lastname, email, password, role } = userData;
//       const columns = Object.keys(userData).join(", ");
//       const values = Object.values(userData);
//       const placeholders = values.map(() => "?").join(", ");
//       const query = `INSERT INTO users (${columns}) VALUES (${placeholders})`;

//       connection.query(query, values, (error, results, fields) => {
//         if (error) reject(error);
//         resolve(results);
//       });
//     });
//   }

//   static findByEmail(email) {
//     return new Promise((resolve, reject) => {
//       const query = "SELECT * FROM users WHERE email = ?";
//       connection.query(query, [email], (error, results, fields) => {
//         if (error) reject(error);
//         resolve(results[0]);
//       });
//     });
//   }

//   static updateRoleByEmail(email, newRole) {
//     return new Promise((resolve, reject) => {
//       const query = "UPDATE users SET role = ? WHERE email = ?";
//       connection.query(query, [newRole, email], (error, results, fields) => {
//         if (error) reject(error);
//         resolve(results);
//       });
//     });
//   }
// }

// module.exports = User;

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
