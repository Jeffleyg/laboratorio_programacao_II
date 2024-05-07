const express = require('express');
const router = express.Router();
const ccrController = require('../controllers/ccrController');

// Listar todos os CCRs
router.get('/', ccrController.list);

// Criar um novo CCR
router.post('/', ccrController.create);

// Atualizar um CCR
router.put('/:id', ccrController.update);

// Remover um CCR
router.delete('/:id', ccrController.delete);

module.exports = router;
