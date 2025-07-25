const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '.env') }); // charge .env dans backend

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

const artisanRoutes = require('../routes/artisans');
const sequelize = require('../config/database');

const app = express();
const PORT = process.env.PORT || 3001; // Port par défaut si PORT non défini

// Sécurité HTTP headers
app.use(helmet());

// Limite les requêtes (brute-force / DoS)
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // max 100 requêtes par IP
  standardHeaders: true,
  legacyHeaders: false,
});
app.use(limiter);

// CORS (autorise le front React local uniquement)
app.use(cors({
  origin: 'http://localhost:3000', // en prod, adapter si nécessaire
}));

app.use(express.json());

// Logger des requêtes simples
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Routes API artisans
app.use('/api/artisans', artisanRoutes);

// Sert les fichiers statiques React (si build)
app.use(express.static(path.join(__dirname, '../frontend/build')));

// Gère toutes les routes non-API avec React
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
});

// Démarrage serveur + test DB
app.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Connexion à la base de données réussie.');
  } catch (error) {
    console.error('❌ Impossible de se connecter à la base de données :', error);
  }
  console.log(`🚀 Serveur démarré sur le port ${PORT}`);
});
