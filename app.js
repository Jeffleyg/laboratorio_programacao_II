const express = require('express');
const app = express();
const cursosRouter = require('./routes/cursos');
const ccrsRouter = require('./routes/ccrs');

// Middlewares
app.use(express.json());

// Rotas
app.use('/cursos', cursosRouter);
app.use('/ccrs', ccrsRouter);

// Porta do servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
