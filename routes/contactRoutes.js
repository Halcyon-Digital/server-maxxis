const { createContact, getContact } = require("../controller/contact");

const router = require("express").Router();

// @desc    Get all contact
// @route   GET /api/v1/contact
// @access  Private
router.get("/", getContact);

// @desc    Create Contact
// @route   GET /api/v1/contact
// @access  Private
router.post("/", createContact);

module.exports = router;
