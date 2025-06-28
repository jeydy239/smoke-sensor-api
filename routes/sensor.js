const express = require('express');
const router = express.Router();

let smokeLevel = 0;
let alarmStatus = false;

router.post('/update', (req, res) => {
  const { level } = req.body;
  smokeLevel = level;
  alarmStatus = smokeLevel > 300;
  console.log(`Nivel de humo recibido: ${smokeLevel}`);
  res.json({ message: 'Nivel de humo actualizado.', smokeLevel, alarmStatus });
});

router.get('/', (req, res) => {
  res.json({ smokeLevel, alarmStatus });
});

module.exports = router;