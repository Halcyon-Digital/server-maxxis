const { Schema, model } = require("mongoose");

const dealerSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    companyName: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: [true, "user email is required"],
      trim: true,
      validate: {
        validator: function (v) {
          return v.endsWith(".com");
        },
        message: "Invalid email formats",
      },
    },
    file: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Dealer", dealerSchema);
