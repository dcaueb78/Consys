const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');


const server = express();

mongoose.connect('mongodb+srv://admin:admin@cluster0-wsft3.mongodb.net/consys?retryWrites=true&w=majority', { useNewUrlParser: true });

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3000, () => {
    console.log("Listening on localhost:3000");
});