const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());
app.use(bodyParser.json());

/*const cursosRoutes = require('./routes/cursos');
const ccrsRoutes = require('./routes/ccrs');

app.use('/api/cursos', cursosRoutes);
app.use('/api/ccrs', ccrsRoutes);*/
// Servir arquivos estáticos do diretório 'public'

app.use(express.static('public'));
app.get('/index', (req, res) => {
    const indexPath = path.join(__dirname, 'public', 'index.html');
    res.sendFile(indexPath);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
