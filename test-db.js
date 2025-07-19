require('dotenv').config(); // Charge les variables du .env

// Test : affichage du nom de la base pour vérification
console.log("Nom de la base de données :", process.env.DB_NAME);

const sequelize = require('./config/database');

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('✅ Connexion à MySQL réussie !');
  } catch (error) {
    console.error('❌ Erreur de connexion à MySQL :', error);
  } finally {
    await sequelize.close();
  }
}

testConnection();
