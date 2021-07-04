/**
 * arquivo: database.js
 * descricao: arquivo responsavel pela connectionStrings
 * server.js
 * data: 03/07/2021
 */

const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

// ==> Conexao com a base de dados

const pool = new Pool({
    connectionString: process.env.DATABASE_URL
});

pool.on('error', (err, client)=> {
    console.log('Unexpected error', err)
    process.exit(-1);
})

pool.on('connect', () => {
    console.log('Base conectada com sucesso')
});

module.exports = {
    query: (text, params) => pool.query(text, params),
}