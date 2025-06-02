const { DataTypes } = require("sequelize");
const sequelize = require("../config/database.js");

const Mall = sequelize.define(
  "Mall",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nama_mall: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    deskripsi: {
      type: DataTypes.TEXT,
    },
    lokasi: {
      type: DataTypes.STRING,
    },
    rating: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
    },
    image: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "malls",
    timestamps: true, // createdAt & updatedAt
  }
);

module.exports = Mall;
