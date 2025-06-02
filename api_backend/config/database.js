const { Sequelize } = require("sequelize");

console.log("Connecting to DB with:", {
  DB_NAME: "db_mall",
  DB_USERNAME: "root",
  DB_PASSWORD: "galvin",
  DB_HOST: "35.232.178.140",
});

const sequelize = new Sequelize("db_mall", "root", "galvin", {
  host: "35.232.178.140",
  dialect: "mysql",
  logging: false, // Set to console.log to see SQL queries
});

module.exports = sequelize;
