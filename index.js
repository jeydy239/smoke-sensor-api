onst express = require('express');
const bodyParser = require('body-parser');
const sensorRoutes = require('./routes/sensor');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/api/sensor', sensorRoutes);

// 👉 Ruta GET /
app.get('/', (req, res) => {
  res.send('✅ API Smoke Sensor Activa!');
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});