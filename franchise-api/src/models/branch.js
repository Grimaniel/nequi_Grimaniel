const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Franchise = require('./franchise');

const Branch = sequelize.define('Branch', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: false
});

Branch.belongsTo(Franchise, { foreignKey: 'franchiseId' });

module.exports = Branch;
