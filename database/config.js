// models/database.js
const { Pool } = require('pg');

// Configuração da conexão com o PostgreSQL
const pool = new Pool({
    user: 'servers',
    host: 'localhost',
    database: 'agendamento',
    password: 'root',
    port: 5432, // Porta padrão do PostgreSQL
});

module.exports = {
    query: (text, params, callback) => {
        return pool.query(text, params, callback);
    }
};
