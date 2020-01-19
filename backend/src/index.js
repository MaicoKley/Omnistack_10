const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const routes = require('./routes');
const { setupWebSocket } = require('./websocket')

const app = express();
const server = http.Server(app);

setupWebSocket(server);

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-2mg7k.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});

app.use(cors());
app.use(express.json());
app.use(routes);

// Métodos HTTP: GET, POST, PUT, DELETE

// Tipos de parâmetros

// Query Params: req.query (Filtros, ordenação, paginação, ...)
// Route Params: req.params (Identificar um recurso na alteração ou remoção)
// Body: req.body (Dados para criação ou alteração de um registro)

// MongoDB (Não-relacional)

server.listen(3333);