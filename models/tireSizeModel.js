const mongoose = require('mongoose');

const tireSizeSchema = new mongoose.Schema(
  {
    size: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('TireSize', tireSizeSchema);
