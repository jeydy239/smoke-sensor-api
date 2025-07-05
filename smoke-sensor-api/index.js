const express = require('express');
const bodyParser = require('body-parser');

// Importar rutas
const sensorRoutes = require('../routes/routes/sensor');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Rutas para el sensor
app.use('/api/sensor', sensorRoutes);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});