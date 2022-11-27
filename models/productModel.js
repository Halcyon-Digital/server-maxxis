const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
    },
    description: String,

    weight: {
      type: String,
      required: true,
    },

    regularPrice: {
      type: String,
      required: true,
    },

    discountPrice: {
      type: String,
      required: true,
    },

    price: {
      type: String,
      required: true,
    },

    categories: {
      type: String,
      required: true,
    },

    size: {
      type: String,
      required: true,
    },

    thumbnailImage: {
      type: String,
      required: true,
    },

    images: {
      type: String,
      required: true,
    },

    features: {
      type: String,
      required: true,
    },

    shippingRateDhaka: {
      type: Number,
      required: true,
    },

    shippingRateOut: {
      type: Number,
      required: true,
    },

    featuresDetails: {
      type: String,
    },

    stockQuantity: {
      type: String,
      required: true,
    },

    shippingInDhaka: {
      type: String,
      default: '0',
    },

    shippingOutDhaka: {
      type: String,
      default: '0',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Product', productSchema);
