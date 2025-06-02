const { DataTypes } = require("sequelize");
const sequelize = require("../config/database.js");

const User = sequelize.define(
  "User",
  {
    id: {
      type:DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "users", // Nama tabel di database
    timestamps: false, // Nonaktifkan timestamps jika tidak diperlukan
  }
);

module.exports = User;
