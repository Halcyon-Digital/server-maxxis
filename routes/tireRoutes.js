const {
  makeTire,
  updateTire,
  deleteTire,
  getTires,
} = require("../controller/tire");
const { protect } = require("../middleware/authenticate");
const { uploadImage } = require("../middleware/fileUpload");

const router = require("express").Router();

// @desc    Get all banner
// @route   GET /api/v1/tires
// @access  Public
router.get("/", getTires);

// @desc    Create a new banner banner
// @route   POST /api/v1/tires/range
// @access Private
router.post("/range", protect, uploadImage, makeTire);

// @desc    Create a new banner banner
// @route   GET /api/v1/tires/:id
// @access Private
router.put("/:id", protect, uploadImage, updateTire);

// @desc    Delete  banner
// @route   GET /api/v1/tires/:id
// @access Private
router.delete("/:id", protect, deleteTire);

module.exports = router;
