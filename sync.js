const sequelize = require('./config/database');
const Artisan = require('./models/artisan');

async function syncDatabase() {
  try {
    await sequelize.sync({ force: true }); // ⚠️ supprime et recrée la table si elle existe déjà
    console.log('✅ Table Artisan créée avec succès !');
  } catch (error) {
    console.error('❌ Erreur lors de la synchronisation :', error);
  } finally {
    await sequelize.close();
  }
}

syncDatabase();
