const {
  getItems,
  makeItem,
  updateItem,
  deleteItem,
  allItem,
} = require("../controller/newItem");
const { protect } = require("../middleware/authenticate");
const { uploadImage } = require("../middleware/fileUpload");

const router = require("express").Router();

// @desc    Get all Item
// @route   GET /api/v1/Items
// @access  Public
router.get("/", getItems);
router.get("/all", allItem);

// @desc    Create a new Item Item
// @route   GET /api/v1/Items
// @access  Public
router.post("/", protect, uploadImage, makeItem);
router.put("/:id", protect, uploadImage, updateItem);
router.delete("/:id", protect, deleteItem);

module.exports = router;
