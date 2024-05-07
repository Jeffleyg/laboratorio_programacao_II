const express = require('express');
const router = express.Router();
const cursoController = require('../controllers/cursoController');

// Listar todos os cursos
router.get('/', cursoController.list);

// Criar um novo curso
router.post('/', cursoController.create);

// Atualizar um curso
router.put('/:id', cursoController.update);

// Remover um curso
router.delete('/:id', cursoController.delete);

module.exports = router;
