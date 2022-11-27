const Product = require('../models/productModel');

const getProducts = async (req, res) => {
  const query = req.query;

  try {
    const products = await Product.find(query);
    res.status(201).json(products);
  } catch (error) {
    console.log(error);
  }
};

const productPagination = async (req, res) => {
  const { page, size, categories } = req.query;

  try {
    if (page && size) {
      const response = await Product.find({})
        .skip(page * size)
        .limit(size);

      return res.status(200).json(response);
    }
  } catch (error) {
    console.log(error);
  }
};

const productById = async (req, res) => {
  const { key } = req.params;
  try {
    const response = await Product.findById({ _id: key });
    res.status(203).json(response);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getProducts,
  productPagination,
  productById,
};
