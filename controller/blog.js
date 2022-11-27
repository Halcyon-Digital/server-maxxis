const Blog = require("../models/blogModel");

const getBlog = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (error) {
    console.log(error);
  }
};

const crateBlog = async (req, res) => {
  const { title, description } = req.body;
  const { filename } = req.file;

  if ((!title && !description, !filename)) {
    return res.status(404).json({ message: "Invalid Data" });
  }

  try {
    const blog = new Blog({ title, description, blogImage: filename });
    await blog.save();

    res.status(200).json({ message: "Blog create successfully." });
  } catch (error) {
    console.log(error);
  }
};

const updateBlog = async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;

  const updatedData = {
    title,
    description,
    blogImage: req?.file?.filename,
  };

  try {
    await Blog.findByIdAndUpdate({ _id: id }, { $set: updatedData });

    res.status(200).json({ message: "Blog updated successfully" });
  } catch (error) {
    console.log(error);
  }
};

const deleteBlog = async (req, res) => {
  const { id } = req.params;

  try {
    await Blog.findByIdAndDelete({ _id: id });

    res.status(200).json({ message: "Blog deleted successfully" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getBlog,
  crateBlog,
  updateBlog,
  deleteBlog,
};
