const Category = require("../models/categoryModel");

const getCategory = async (_req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    console.log(error);
  }
};

const createCategory = async (req, res) => {
  try {
    const newCategory = new Category(req.body);
    await newCategory.save();

    res.status(200).json({ message: "Category added successfully." });
  } catch (error) {
    console.log(error);
  }
};

const deleteCategory = async (req, res) => {
  const { id } = req.params;

  try {
    await Category.findByIdAndDelete({ _id: id });

    res.status(200).json({ message: "Category deleted successfully" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getCategory,
  createCategory,
  deleteCategory,
};
