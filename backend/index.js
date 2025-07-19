require('dotenv').config({ path: './.env' }); // Indique clairement que .env est dans backend/
const express = require('express');
const cors = require('cors');
const artisanRoutes = require('../routes/artisans');  // OK : routes/ est en racine
const sequelize = require('../config/database');      // OK : config/ est en racine

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.use('/api/artisans', artisanRoutes);

app.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    console.log('Connexion à la base de données réussie.');
  } catch (error) {
    console.error('Impossible de se connecter à la base de données :', error);
  }
  console.log(`🚀 Serveur démarré sur le port ${PORT}`);
});
