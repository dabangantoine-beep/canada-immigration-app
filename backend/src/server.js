const express = require('express');
const cors = require('cors');
require('dotenv').config();

const pool = require('./config/db');
const evalRoutes = require('./routes/evalRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: process.env.FRONTEND_URL || '*',
  credentials: true,
}));
app.use(express.json());

app.get('/api/health', async (req, res) => {
  try {
    await pool.query('SELECT 1');
    res.json({ status: 'ok', message: 'API Immigration Canada opérationnelle' });
  } catch (err) {
    res.status(500).json({ status: 'error', message: 'Erreur base de données' });
  }
});

app.use('/api/evaluations', evalRoutes);

app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
