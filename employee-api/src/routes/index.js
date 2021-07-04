// Responsavel pela chamada da api no lado do backend

const express = require('express');

const router = express.Router();

router.get('/api', (req, res) => {
    res.status(200).send({
        success: 'true',
        messagem: 'Seja bem vindo',
        version: '1.0.0'
    });
});

module.exports = router;