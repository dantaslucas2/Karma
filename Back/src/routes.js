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


router.get('/services', servicesController.findAll);
router.post('/service', servicesController.create);
router.get('/service/:id', servicesController.findById);
router.put('/service/:id', servicesController.update);
router.delete('/service/:id', servicesController.delete);


router.get('/contracts', contractsController.findAll);
router.post('/contract', contractsController.create);
router.get('/contract/:id', contractsController.findById);
router.put('/contract/:id', contractsController.update);
router.delete('/contract/:id', contractsController.delete);

module.exports = router