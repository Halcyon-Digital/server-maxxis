const mongoose = require("mongoose");

const newItemSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
    },
    item: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Item", newItemSchema);
