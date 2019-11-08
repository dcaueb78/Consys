const express = require("express");

import authMiddleware from '../src/middlewares/auth';
import SessionController from '../src/controllers/SessionController';

const routes = express.Router();

routes.post('/session', SessionController.store);

//routes.use(authMiddleware);



module.exports = routes;
