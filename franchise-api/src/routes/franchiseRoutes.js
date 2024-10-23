const express = require('express');
const router = express.Router();
const franchiseController = require('../controllers/franchiseController');

router.post('/', franchiseController.createFranchise);
router.post('/:franchiseId/branches', franchiseController.addBranch);
router.post('/:franchiseId/branches/:branchId/products', franchiseController.addProduct);
router.put('/:franchiseId/branches/:branchId/products/:productId/stock', franchiseController.updateStock);
router.get('/:franchiseId/branches/products/max-stock', franchiseController.getMaxStockProducts);

router.get('/:franchiseId/branches/:branchId/products', franchiseController.getAllProducts);
router.get('/:franchiseId/branches/:branchId/products/:productId', franchiseController.getProductById);
router.put('/:franchiseId/branches/:branchId/products/:productId', franchiseController.updateProduct);
router.delete('/:franchiseId/branches/:branchId/products/:productId', franchiseController.deleteProduct);


router.get('/:franchiseId/branches/products/min-stock', franchiseController.getMinStockProducts);

module.exports = router;
