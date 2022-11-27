const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: [true, 'user email is required'],
      trim: true,
      validate: {
        validator: function (v) {
          return v.endsWith('.com');
        },
        message: 'Invalid email formats',
      },
    },
    password: {
      type: String,
      required: [true, 'user password is required'],
      minlength: 6,
    },
    mobile: {
      type: String,
      required: [true, 'Mobile number is required'],
    },

    role: {
      type: String,
      enum: ['admin', 'user'],
      default: 'user',
    },

    orders: [
      {
        type: mongoose.Types.ObjectId,
        ref: 'Order',
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('User', userSchema);
