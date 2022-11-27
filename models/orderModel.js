const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema(
  {
    products: Array,
    customerInfo: {
      name: {
        type: String,
        required: true,
      },
      companyName: {
        type: String,
        required: true,
      },
      address: {
        type: String,
        required: true,
      },
      postCode: {
        type: String,
        required: true,
      },
      notes: {
        type: String,
      },
      mobileNumber: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        validate: {
          validator: function (v) {
            return v.endsWith('.com');
          },
          message: 'Invalid email formats',
        },
      },
      district: {
        type: String,
        required: true,
      },
      town: {
        type: String,
        required: true,
      },
    },

    trxId: String,
    status: {
      type: String,
      enum: ['pending', 'cancel', 'processing', 'shipped', 'completed'],
      default: 'pending',
    },

    shippingType: {
      type: String,
      required: true,
    },
    referenceNumber: {
      type: String,
      required: true,
    },

    /* 
    deliveryCharge: {
      type: String,
      required: true,
    },
    totalPrice: {
      type: String,
      required: true,
    },
    totalPayment: {
      type: String,
      required: true,
    }, */
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Order', orderSchema);
