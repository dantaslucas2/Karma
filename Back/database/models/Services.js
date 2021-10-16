const Sequilize = require("sequelize");
const connection = require("../database");
const Users = require("./Users");

const service = connection.define("Services", {
  id_service: {
    type: Sequilize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: Sequilize.STRING,
    allowNull: false,
  },
  tag: {
    type: Sequilize.TEXT,
    allowNull: false,
  },
  points: {
    type: Sequilize.INTEGER,
    allowNull: false,
  },
  category: {
    type: Sequilize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequilize.STRING,
    allowNull: false,
  },
  status: {
    type: Sequilize.INTEGER,
    allowNull: false,
  },
  type_service: {
    type: Sequilize.STRING,
    allowNull: false,
  },
  id_owner: {
    type: Sequilize.INTEGER,
    allowNull: false,
    References: {
      model: "Users",
      key: "id_user",
    },
  },
});

Users.hasMany(service, {
  foreignKey: "id_owner",
  targetKey: "id_user",
  allowNull: false,
});

module.exports = service;
