const {
  getTireSize,
  createTireSize,
  deleteTireSize,
} = require('../controller/tireSize');
const { protect } = require('../middleware/authenticate');

const router = require('express').Router();

// @desc    Get Categories
// @route   GET /api/v1/category
// @access  Private
router.get('/', getTireSize);

// @desc    create new Category
// @route   POST /api/v1/category
// @access  Private
router.post('/', protect, createTireSize);

// @desc    create new Category
// @route   Delete /api/v1/category/:id
// @access  Private
router.delete('/:id', protect, deleteTireSize);

module.exports = router;
