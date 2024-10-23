const franchiseService = require('../services/franchiseService');

exports.createFranchise = async (req, res) => {
  try {
    const franchise = await franchiseService.createFranchise(req.body);
    res.status(201).json(franchise);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.addBranch = async (req, res) => {
  try {
    const { franchiseId } = req.params;
    const branch = await franchiseService.addBranch(franchiseId, req.body);
    res.status(201).json(branch);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.addProduct = async (req, res) => {
  try {
    const { franchiseId, branchId } = req.params;
    const product = await franchiseService.addProduct(franchiseId, branchId, req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateStock = async (req, res) => {
  try {
    const { franchiseId, branchId, productId } = req.params;
    const { stock } = req.body;
    const updatedProduct = await franchiseService.updateStock(franchiseId, branchId, productId, stock);
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getMaxStockProducts = async (req, res) => {
  try {
    const { franchiseId } = req.params;
    const products = await franchiseService.getMaxStockProducts(franchiseId);
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAllProducts = async (req, res) => {
    try {
      const { branchId } = req.params;
      const branch = await Branch.findByPk(branchId, {
        include: Product,
      });
      if (!branch) return res.status(404).json({ error: 'Branch not found' });
  
      res.json(branch.Products);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  exports.getProductById = async (req, res) => {
    try {
      const { productId } = req.params;
      const product = await Product.findByPk(productId);
      if (!product) return res.status(404).json({ error: 'Product not found' });
  
      res.json(product);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  exports.updateProduct = async (req, res) => {
    try {
      const { productId } = req.params;
      const { name, stock } = req.body;
      const product = await Product.findByPk(productId);
      if (!product) return res.status(404).json({ error: 'Product not found' });
  
      product.name = name || product.name;
      product.stock = stock || product.stock;
      await product.save();
      res.json(product);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  exports.deleteProduct = async (req, res) => {
    try {
      const { productId } = req.params;
      const product = await Product.findByPk(productId);
      if (!product) return res.status(404).json({ error: 'Product not found' });
  
      await product.destroy();
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  exports.getMinStockProducts = async (req, res) => {
    try {
      const { franchiseId } = req.params;
      const franchise = await Franchise.findByPk(franchiseId, {
        include: { model: Branch, include: Product },
      });
      if (!franchise) return res.status(404).json({ error: 'Franchise not found' });
  
      const minStockProducts = franchise.Branches.map(branch => {
        const minStockProduct = branch.Products.reduce((prev, current) =>
          prev.stock < current.stock ? prev : current
        );
        return { branch: branch.name, product: minStockProduct };
      });
      res.json(minStockProducts);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };