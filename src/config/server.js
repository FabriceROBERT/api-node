const mysql = require("mariadb");
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "fabrice",
  database: "duncan",
});

module.exports = db;
