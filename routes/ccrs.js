const express = require('express');
const router = express.Router();

// Simulando banco de dados
const ccrs = require('../database/database').ccrs;

// GET: Listar todos
router.get('/', (req, res) => {
    res.status(200).json(ccrs);
});

// POST: Adicionar 
router.post('/', (req, res) => {
    const ccr = req.body;
    ccrs.push(ccr);  
    res.status(201).send();
});


// PUT: Atualizar 
router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const ccrIndex = ccrs.findIndex(c => c.id === id);
    if (ccrIndex > -1) {
        ccrs[ccrIndex] = req.body;
        res.status(200).send();
    } else {
        res.status(404).send('CCR not found');
    }
});


// DELETE
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const newCcrs = ccrs.filter(c => c.id !== id);
    ccrs.length = 0; 
    ccrs.push(...newCcrs); 
    res.status(204).send();
});

module.exports = router;
