const Sequilize = require("sequelize");
const connection = require("../database");

const tags = connection.define("Tags", {
  id_tag: {
    type: Sequilize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: Sequilize.STRING,
    allowNull: false,
    unique: true,
  },
});

tags.sync({ force: true }).then(() => console.log("Tabela tags criada"));

module.exports = tags;
