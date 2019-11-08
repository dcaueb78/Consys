const express = require("express");

const authMiddleware = require('../src/middlewares/auth');

const routes = express.Router();

routes.use(authMiddleware.default);



module.exports = routes;
