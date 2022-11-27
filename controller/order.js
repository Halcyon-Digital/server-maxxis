const Order = require('../models/orderModel');
const User = require('../models/userModel');

const makeOrder = async (req, _res, next) => {
  const { cart, customer, order } = req.body;

  const orderData = {
    products: cart,
    customerInfo: customer,
    trxId: order.trxId,
    shippingType: order.paymentType,
    referenceNumber: order.mobileNumber,
  };
  /* if (!orderData) {
    return res.status(404).json({ message: 'Invalid Data!' });
  } */
  try {
    const order = new Order(orderData);
    await order.save();

    /* await User.updateOne(
      {
        _id: req.userId,
      },
      {
        $push: {
          orders: order._id,
        },
      }
    );
    req.order = order; */

    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  makeOrder,
};
