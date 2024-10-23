const Franchise = require('../models/franchise');
const Branch = require('../models/branch');
const Product = require('../models/product');

exports.createFranchise = async (data) => {
  return await Franchise.create(data);
};

exports.addBranch = async (franchiseId, data) => {
  const franchise = await Franchise.findByPk(franchiseId);
  if (!franchise) throw new Error('Franchise not found');
  return await Branch.create({ ...data, franchiseId });
};

exports.addProduct = async (franchiseId, branchId, data) => {
  const branch = await Branch.findOne({ where: { id: branchId, franchiseId } });
  if (!branch) throw new Error('Branch not found');
  return await Product.create({ ...data, branchId });
};

exports.updateStock = async (franchiseId, branchId, productId, stock) => {
  const product = await Product.findOne({ where: { id: productId, branchId } });
  if (!product) throw new Error('Product not found');
  product.stock = stock;
  return await product.save();
};

exports.getMaxStockProducts = async (franchiseId) => {
  const branches = await Branch.findAll({ where: { franchiseId }, include: Product });
  return branches.map(branch => {
    const maxStockProduct = branch.Products.reduce((max, product) => product.stock > max.stock ? product : max, { stock: -1 });
    return { branchName: branch.name, product: maxStockProduct };
  });
};
