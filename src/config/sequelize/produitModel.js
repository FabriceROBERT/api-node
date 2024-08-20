const sequelize = require("./db.js");
const { DataTypes } = require("sequelize");
const Produit = sequelize.define(
  "produit",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nom: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    prix: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { sequelize, freezeTableName: true }
);

module.exports = Produit;
