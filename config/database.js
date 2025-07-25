const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, 'backend', '.env') }); // Charge le .env depuis backend/

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    port: process.env.DB_PORT || 3306,
    logging: false, // true pour afficher les requêtes SQL dans la console
  }
);

module.exports = sequelize;
