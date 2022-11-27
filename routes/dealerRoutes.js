const {
  getDealer,
  deleteDealer,
  createDealer,
} = require("../controller/dealer");
const { protect } = require("../middleware/authenticate");
const { uploadImage } = require("../middleware/fileUpload");

const router = require("express").Router();

// @desc    Get all Dealer
// @route   GET /api/v1/dealer
// @access  Private
router.get("/", protect, getDealer);

// @desc   Create a  Dealer
// @route   POST /api/v1/dealer
// @access  Public
router.post("/", protect, uploadImage, createDealer);

// @desc   delete a  Dealer
// @route   DELETE /api/v1/dealer
// @access  Private
router.delete("/:id", protect, deleteDealer);

module.exports = router;
