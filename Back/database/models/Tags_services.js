const Sequilize = require("sequelize");
const connection = require("../database");
const Tags = require("./Tags");
const Services = require("./Services");

const tags_services = connection.define("tags_services", {
  id_tag_service: {
    type: Sequilize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
});

Tags.hasMany(tags_services, {
  foreignKey: "id_tag",
  targetKey: "id_tag",
  allowNull: false,
});

Services.hasMany(tags_services, {
  foreignKey: "id_service",
  targetKey: "id_service",
  allowNull: false,
});

tags_services
  .sync({ force: true })
  .then(() => console.log("Tabela tags_services criada"));

module.exports = tags_services;
