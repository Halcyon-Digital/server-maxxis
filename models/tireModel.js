const mongoose = require('mongoose');

const tireSchema = new mongoose.Schema(
  {
    size: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Tire', tireSchema);
