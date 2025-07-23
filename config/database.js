const { Sequelize } = require('sequelize');
require('dotenv').config(); // .env est à la racine, pas besoin de spécifier un path

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    port: process.env.DB_PORT,
    logging: false, // true pour afficher les requêtes SQL dans la console
  }
);

module.exports = sequelize;
