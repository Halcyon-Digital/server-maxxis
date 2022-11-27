const {
  getBlog,
  updateBlog,
  deleteBlog,
  crateBlog,
} = require("../controller/blog");
const { protect } = require("../middleware/authenticate");
const { uploadImage } = require("../middleware/fileUpload");

const router = require("express").Router();

// @desc    Get all Blogs
// @route   GET /api/v1/blogs
// @access  Public
router.get("/", getBlog);
router.post("/create", protect, uploadImage, crateBlog);
router.put("/update/:id", uploadImage, updateBlog);
router.delete("/:id", deleteBlog);

module.exports = router;
