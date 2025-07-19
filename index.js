require('dotenv').config();
const express = require('express');
const cors = require('cors');
const artisanRoutes = require('./routes/artisans');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Middleware simple pour logger chaque requête reçue
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Toutes les routes artisan seront sous /api/artisans
app.use('/api/artisans', artisanRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Serveur démarré sur le port ${PORT}`);
});
