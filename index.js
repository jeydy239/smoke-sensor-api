const express = require('express');
const bodyParser = require('body-parser');
const sensorRoutes = require('./routes/sensor');

const app = express();
const PORT = process.env.PORT || 3000;

// ✅ Habilitar JSON parser
app.use(bodyParser.json());

// ✅ Ruta base para la raíz "/"
app.get('/', (req, res) => {
  res.send('✅ API Smoke Sensor Activa!');
});

// ✅ Rutas del sensor
app.use('/api/sensor', sensorRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});