const { makeOrder } = require('../controller/order');
const { sentMail } = require('../service/mail');

const router = require('express').Router();

// @desc    Make an Order
// @route   POST /api/v1/orders
// @access  Public
router.post('/', makeOrder, sentMail);

module.exports = router;
