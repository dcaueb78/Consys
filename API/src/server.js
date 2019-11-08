const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const server = express();

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3333, () => {
    console.log("Listening on localhost:3333");
});
