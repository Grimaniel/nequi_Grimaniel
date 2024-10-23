const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Branch = require('./branch');

const Product = sequelize.define('Product', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  stock: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  }
}, {
  timestamps: false
});

Product.belongsTo(Branch, { foreignKey: 'branchId' });

module.exports = Product;
