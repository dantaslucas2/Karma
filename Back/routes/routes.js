const express = require("express");
const users = require("../controllers/userController");
const services = require("../controllers/serviceController");
const contracts = require("../controllers/contractController");
const authenticate = require("../controllers/loginController");

const routes = express.Router();

routes.get("/api/users", users.listUsers);
routes.get("/api/user/:id", users.indexUser);
routes.get("/api/user/:id/cards", users.indexUsercard);
routes.post("/api/user", users.createUsers);
routes.post("/api/user/:id", users.updateUser);
routes.delete("/api/user/:id", users.deleteUser);

routes.get("/api/services", services.listServices);
routes.get("/api/servicesgroupby", services.listServicesGroupBy);
routes.get("/api/service/:id", services.indexService);
routes.get("/api/service/tag/:id", services.tagsService);
routes.post("/api/service", services.createServices);
routes.post("/api/service/:id", services.updateService);
routes.delete("/api/service/:id", services.deleteService);

routes.get("/api/contracts", contracts.listContracts);
routes.get("/api/contract/:id", contracts.indexContract);
routes.post("/api/contract", contracts.createContracts);
routes.post("/api/contract/:id", contracts.updateContract);
routes.delete("/api/contract/:id", contracts.deleteContract);
routes.get("/api/myservices/:id", contracts.listMyContracts);

routes.post("/api/login", authenticate.login);

module.exports = routes;
