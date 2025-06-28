// index.js

const express = require('express');
const bodyParser = require('body-parser');
const sensorRoutes = require('./routes/sensor');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Usa las rutas del sensor
app.use('/api/sensor', sensorRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});