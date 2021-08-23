const Sequilize = require("sequelize");

const connection = new Sequilize("karmaTeste", "root", "aA@123456", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = connection;
