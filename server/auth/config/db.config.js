const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "auth_system",
});

connection.connect((error) => {
  if (error) throw error;
  console.log("Connected to the MySQL database.");
});

module.exports = connection;
