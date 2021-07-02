const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Essa rota funcionou'
    });
});

router.post('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Teste post'
    })
});

router.get('/:id_teste', (req, res, next)=> {
    const id = req.params.id_teste
    res.status(200).set({
        mensagem: 'Usando o GET de um id_teste',
        id: id
    })
})

module.exports = router;