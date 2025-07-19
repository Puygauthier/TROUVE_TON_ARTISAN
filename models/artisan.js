const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

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
  métier: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  tableName: 'artisans',
  timestamps: false
});

module.exports = Artisan;
