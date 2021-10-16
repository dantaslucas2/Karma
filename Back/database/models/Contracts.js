const Sequilize = require("sequelize");
const connection = require("../database");
const Users = require("./Users");
const Services = require("./Services");

const contract = connection.define("Contracts", {
  id_contract: {
    type: Sequilize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  date_begin: {
    type: Sequilize.DATE,
  },
  date_end: {
    type: Sequilize.DATE,
  },
  points: {
    type: Sequilize.INTEGER,
    allowNull: false,
  },
  id_service: {
    type: Sequilize.INTEGER,
    allowNull: false,
    References: {
      model: "Users",
      key: "id_user",
    },
  },
  id_request: {
    type: Sequilize.INTEGER,
    allowNull: false,
    References: {
      model: "Services",
      key: "id_service",
    },
  },
});

Users.hasMany(contract, {
  foreignKey: "id_request",
  targetKey: "id_user",
  allowNull: false,
});

Services.hasMany(contract, {
  foreignKey: "id_service",
  targetKey: "id_service",
  allowNull: false,
});

module.exports = contract;
