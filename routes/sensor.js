const express = require('express');
const router = express.Router();

// 👇 Variables globales para mantener el último estado:
let smokeLevel = 0;
let alarmStatus = false;

router.post('/update', (req, res) => {
  const { level } = req.body;

  console.log("REQ.BODY:", req.body);

  if (typeof level !== 'number') {
    return res.status(400).json({ error: 'El nivel debe ser un número.' });
  }

  if (level < 0 || level > 100) {
    return res.status(400).json({ error: 'El nivel debe estar entre 0 y 100.' });
  }

  // ✅ Guarda los datos
  smokeLevel = level;
  alarmStatus = level > 40;

  res.json({ smokeLevel, alarmStatus });
});

// ✅ Ruta nueva para consultar el estado actual
router.get('/status', (req, res) => {
  res.json({ smokeLevel, alarmStatus });
});

module.exports = router;