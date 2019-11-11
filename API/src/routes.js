const express = require("express");

import SessionController from '../src/controllers/SessionController';
import authMiddleware from '../src/middlewares/auth';
import ConfiguracoesController from '../src/controllers/ConfiguracoesController';
import ClientesController from '../src/controllers/ClientesController';
import MotoristasController from '../src/controllers/MotoristasController';
import RegistrosController from '../src/controllers/RegistrosController';

const routes = express.Router();

routes.post('/login', SessionController.store);

routes.use(authMiddleware);

routes.get('/config', ConfiguracoesController.index);
routes.post('/config', ConfiguracoesController.store);

routes.get('/clientes', ClientesController.index);
routes.post('/clientes', ClientesController.store);
routes.delete('/clientes/:id', ClientesController.delete);

routes.get('/motoristas', MotoristasController.index);
routes.post('/motoristas', MotoristasController.store);
routes.delete('/motoristas/:id', MotoristasController.delete);

routes.get('/registros', RegistrosController.index);
routes.post('/entrada', RegistrosController.entrada);
routes.post('/saida', RegistrosController.saida);

module.exports = routes;
