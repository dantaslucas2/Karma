const express = require("express");

const router = express.Router();

const teaController = require("../controllers/user");

router.post("/", userController.newuser);

module.exports = router; // export to use in server.js
