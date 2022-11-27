const {
  getCategory,
  createCategory,
  deleteCategory,
} = require('../controller/category');
const { protect } = require('../middleware/authenticate');

const router = require('express').Router();

// @desc    Get Categories
// @route   GET /api/v1/category
// @access  Private
router.get('/', getCategory);

// @desc    create new Category
// @route   POST /api/v1/category
// @access  Private
router.post('/', protect, createCategory);

// @desc    create new Category
// @route   Delete /api/v1/category/:id
// @access  Private
router.delete('/:id', protect, deleteCategory);

module.exports = router;
