const express = require('express')
const router = express.Router()

const usersController =   require('../Controllers/UsersController');
const servicesController =   require('../Controllers/ServicesController');
const contractsController =   require('../Controllers/ContractsController');

router.get('/users', usersController.findAll);
router.post('/user', usersController.create);
router.get('/user/:id', usersController.findById);
router.put('/user/:id', usersController.update);
router.delete('/user/:id', usersController.delete);

module.exports = router