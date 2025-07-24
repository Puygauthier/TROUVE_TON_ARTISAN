const path = require('path'); // Doit être en tout premier
require('dotenv').config({ path: path.join(__dirname, '../.env') });

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

const artisanRoutes = require('../routes/artisans');
const sequelize = require('../config/database');

const app = express();
const PORT = process.env.PORT || 3001; // ⚠️ port modifié pour éviter le conflit avec React

// Sécurité HTTP headers
app.use(helmet());

// Limite les requêtes pour éviter les attaques par brute force ou DoS
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // max 100 requêtes par IP par fenêtre
  standardHeaders: true,
  legacyHeaders: false,
});
app.use(limiter);

// CORS limité à React local
app.use(cors({
  origin: 'http://localhost:3000', // ⚠️ autorise le front React local
}));

app.use(express.json());

// Logger les requêtes
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Routes API artisans
app.use('/api/artisans', artisanRoutes);

// Sert les fichiers statiques React (si buildé)
app.use(express.static(path.join(__dirname, '../frontend/build')));

// Gère toutes les routes non-API (React frontend)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
});

// Démarrage serveur + test connexion DB
app.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Connexion à la base de données réussie.');
  } catch (error) {
    console.error('❌ Impossible de se connecter à la base de données :', error);
  }
  console.log(`🚀 Serveur démarré sur le port ${PORT}`);
});
