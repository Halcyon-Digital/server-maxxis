const {
  getGallery,
  makeGallery,
  deleteGallery,
} = require("../controller/gallery");
const { protect } = require("../middleware/authenticate");
const { uploadImage } = require("../middleware/fileUpload");

const router = require("express").Router();

// @desc    Get all banner
// @route   GET /api/v1/gallery
// @access  Public
router.get("/", getGallery);

// @desc    Create a new banner banner
// @route   GET /api/v1/gallery
// @access  Private
router.post("/create", protect, uploadImage, makeGallery);

// @desc    Create a new banner banner
// @route   GET /api/v1/gallery
// @access  Private
router.delete("/:id", protect, deleteGallery);

module.exports = router;
