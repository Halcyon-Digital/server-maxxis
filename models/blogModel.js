const { Schema, model } = require("mongoose");

const blogSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  blogImage: {
    type: String,
    required: true,
  },
});

module.exports = model("Blog", blogSchema);
