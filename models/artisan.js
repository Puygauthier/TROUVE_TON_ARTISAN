const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Chemin correct depuis models/ vers config/

const Artisan = sequelize.define('Artisan', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nom: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  specialite: { // propriété JS sans accent
    type: DataTypes.STRING,
    allowNull: false,
    field: 'spécialité', // correspond au nom de colonne SQL avec accent
  },
  note: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  ville: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  a_propos: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  site_web: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  categorie: { // propriété JS sans accent
    type: DataTypes.STRING,
    allowNull: false,
    field: 'catégorie', // correspond au nom de colonne SQL avec accent
  },
  top: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  }
}, {
  tableName: 'artisans', // nom exact de la table dans MySQL
  timestamps: false,     // pas de createdAt / updatedAt
});

module.exports = Artisan;
