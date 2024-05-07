const CCR = require('../models/ccr');
const database = require('../database/config');

const ccrController = {
  list: (req, res) => {
    res.status(200).json(database.ccrs);
  },

  create: (req, res) => {
    const { id, nome } = req.body;
    const newCCR = new CCR(id, nome);
    database.ccrs.push(newCCR);
    res.status(201).send();
  },

  update: (req, res) => {
    const id = req.params.id;
    const ccrIndex = database.ccrs.findIndex(c => c.id === id);
    if (ccrIndex > -1) {
      const { nome } = req.body;
      database.ccrs[ccrIndex] = { id, nome };
      res.status(200).send();
    } else {
      res.status(404).send('CCR not found');
    }
  },

  delete: (req, res) => {
    const id = req.params.id;
    const newCCRs = database.ccrs.filter(c => c.id !== id);
    database.ccrs.length = 0;
    database.ccrs.push(...newCCRs);
    res.status(204).send();
  }
};

module.exports = ccrController;
