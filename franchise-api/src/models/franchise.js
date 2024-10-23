const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Franchise = sequelize.define('Franchise', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: false
});

module.exports = Franchise;
