const express = require('express');
const router = express.Router();

// Simulando banco de dados
const cursos = require('../database/database').cursos;

// GET: Listar todos os cursos
router.get('/', (req, res) => {
    res.status(200).json(cursos);
});

// POST: Criar um novo curso
router.post('/', (req, res) => {
    const curso = req.body;
    cursos.push(curso); 
    res.status(201).send();
});

// PUT: Atualizar um curso deve ser todos os campos
router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const cursoIndex = cursos.findIndex(c => c.id === id);
    if (cursoIndex > -1) {
        cursos[cursoIndex] = req.body;
        res.status(200).send();
    } else {
        res.status(404).send();
    }
});

// DELETE: Remover um curso por id
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const newCursos = cursos.filter(c => c.id !== id);
    cursos.length = 0; 
    cursos.push(...newCursos); 
    res.status(204).send();
});

module.exports = router;
