const express = require('express');
const ContainerController = require('./controllers/ContainerController');
const UserController = require('./controllers/UserController');
const routes = express.Router();

//rotas container
routes.get('/containers', ContainerController.index);
routes.post('/containers', ContainerController.store);

//rotas usuário
routes.post('/user', UserController.store);

module.exports = routes;