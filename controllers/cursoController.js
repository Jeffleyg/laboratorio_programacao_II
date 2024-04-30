const Curso = require('../models/curso');
const database = require('../models/database');

const cursoController = {
  list: (req, res) => {
    res.status(200).json(database.cursos);
  },

  create: (req, res) => {
    const { id, nome, turno, id_campus } = req.body;
    const newCurso = new Curso(id, nome, turno, id_campus);
    database.cursos.push(newCurso);
    res.status(201).send();
  },

  update: (req, res) => {
    const id = parseInt(req.params.id);
    const cursoIndex = database.cursos.findIndex(c => c.id === id);
    if (cursoIndex > -1) {
      const { nome, turno, id_campus } = req.body;
      database.cursos[cursoIndex] = { id, nome, turno, id_campus };
      res.status(200).send();
    } else {
      res.status(404).send('Curso not found');
    }
  },

  delete: (req, res) => {
    const id = parseInt(req.params.id);
    const newCursos = database.cursos.filter(c => c.id !== id);
    database.cursos.length = 0;
    database.cursos.push(...newCursos);
    res.status(204).send();
  }
};

module.exports = cursoController;
