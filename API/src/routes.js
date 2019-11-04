const express = require("express");
const ContainerController = require("./controllers/ContainerController");
const UserController = require("./controllers/UserController");
const routes = express.Router();

//rotas container
routes.get("/containers", ContainerController.index);
routes.post("/containers", ContainerController.store);
routes.put("/containers/:id", ContainerController.update);
routes.delete("/containers/:id", ContainerController.delete);

//rotas usuário
routes.post("/login", UserController.signIn);
routes.post("/user/create", UserController.store);

module.exports = routes;
