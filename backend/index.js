const path = require('path'); // 🟢 Doit être en tout premier
require('dotenv').config({ path: path.join(__dirname, '../.env') }); // ✅ maintenant path est bien défini

const express = require('express');
const cors = require('cors');
const artisanRoutes = require('../routes/artisans');  // ✅ routes/ est à la racine
const sequelize = require('../config/database');      // ✅ config/ est à la racine

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.use('/api/artisans', artisanRoutes);

// Servir le frontend React buildé
app.use(express.static(path.join(__dirname, '../frontend/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
});

app.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Connexion à la base de données réussie.');
  } catch (error) {
    console.error('❌ Impossible de se connecter à la base de données :', error);
  }
  console.log(`🚀 Serveur démarré sur le port ${PORT}`);
});
