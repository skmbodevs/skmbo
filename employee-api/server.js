/**
 * arquivo: server.js
 * descricao: arquivo responsavel por toda a configuracao
 * execucao do back-end
 * data: 03/07/2021
 */

const app = require('./src/app');

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('App send executadp na porta...:', port)
})
