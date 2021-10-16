const Sequilize = require("sequelize");
const connection = require("../database");

const user = connection.define("Users", {
  id_user: {
    type: Sequilize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: Sequilize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequilize.STRING,
    allowNull: false,
  },
  points: {
    type: Sequilize.INTEGER,
    allowNull: false,
  },
  institution: {
    type: Sequilize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequilize.STRING,
    allowNull: true,
  },
  user: {
    type: Sequilize.STRING,
    allowNull: true,
    unique: true,
  },
});

module.exports = user;
