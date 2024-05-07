// controllers/cursoController.js
const pool = require('../database/config');
const Curso = require('../models/Curso');

const cursoController = {
    list: async (req, res) => {
        const { rows } = await pool.query('SELECT * FROM cursos_com_horario');
        res.status(200).json(rows);
    },

    create: async (req, res) => {
        const { nome, descricao } = req.body;
        const { rows } = await pool.query('INSERT INTO cursos_com_horario (nome, descricao) VALUES ($1, $2) RETURNING *', [nome, descricao]);
        res.status(201).json(rows[0]);
    },

    update: async (req, res) => {
        const { id } = req.params;
        const { nome, descricao } = req.body;
        const { rows } = await pool.query('UPDATE cursos_com_horario SET nome = $1, descricao = $2 WHERE id = $3 RETURNING *', [nome, descricao, id]);
        if (rows.length > 0) {
            res.status(200).json(rows[0]);
        } else {
            res.status(404).send('Curso não encontrado');
        }
    },

    delete: async (req, res) => {
        const { id } = req.params;
        await pool.query('DELETE FROM cursos_com_horario WHERE id = $1', [id]);
        res.status(204).send();
    }
};

module.exports = cursoController;
