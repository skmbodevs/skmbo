const { response } = require('express');
const express = require('express');
const app = express();

//Exportar de /routes
const rotaTeste = require('./routes/teste_rota.js');

app.use('teste_rota', rotaTeste)

app.use((req, res, next) => {
    res.status(200).send({
        mensagem: 'Ok, Deu certo'
    });

});

module.exports = app;