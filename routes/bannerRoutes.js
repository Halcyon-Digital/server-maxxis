const {
  getBanners,
  makeBanner,
  updateBanner,
  deleteBanner,
} = require("../controller/banner");
const { protect } = require("../middleware/authenticate");
const { uploadImage } = require("../middleware/fileUpload");

const router = require("express").Router();

// @desc    Get all banner
// @route   GET /api/v1/banners
// @access  Public
router.get("/", getBanners);

// @desc    Create a new banner banner
// @route   GET /api/v1/banners
// @access  Public
router.post("/", protect, uploadImage, makeBanner);
router.put("/:id", protect, uploadImage, updateBanner);
router.delete("/:id", protect, deleteBanner);

module.exports = router;
