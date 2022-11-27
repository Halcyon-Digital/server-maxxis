const {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  productById,
  productPagination,
} = require('../controller/products');
const { protect } = require('../middleware/authenticate');
const { uploadImage, multiUploadImage } = require('../middleware/fileUpload');

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

// @desc    Create Products
// @route   POST /api/v1/products
// @access  Private
router.post('/', protect, createProduct);

// @desc    Update Product
// @route   PUT /api/v1/products/:productId
// @access  Private
router.put('/:productId', protect, updateProduct);

// @desc    Delete Product
// @route   PUT /api/v1/products/:productId
// @access  Private
router.delete('/:productId', protect, deleteProduct);

module.exports = router;
