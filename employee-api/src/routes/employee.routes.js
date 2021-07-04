/**
 * descricao: arquivo responsavel pelas rotas da api
 * server.js
 * data: 03/07/2021
 */

const router = require('express-promise-router')();
const employeeController = require('../controllers/employee.controller');

// => Definindo as rotas do CRUD - 'Employee'

//Rota responsave, por criar um novo colaborador (POST): localhost:3000/api/employees

router.post('/employees', employeeController.createEmployee);

module.exports = router;
