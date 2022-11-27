const {
  getProducts,
  productById,
  productPagination,
} = require('../controller/products');
const router = require('express').Router();

// @desc    Find Product
// @route   GET /api/v1/products
// @access  Public
router.get('/', getProducts);

// @desc    Find Product
// @route   GET /api/v1/products/pagination
// @access  Public
router.get('/pagination', productPagination);

// @desc    Find Product
// @route   GET /api/v1/products/:key
// @access  Public
router.get('/:key', productById);

module.exports = router;
