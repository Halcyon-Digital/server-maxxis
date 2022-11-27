const Product = require('../models/productModel');

const createProduct = async (req, res) => {
  const {
    title,
    code,
    description,
    regularPrice,
    weight,
    discountPrice,
    categories,
    size,
    stockQuantity,
    shippingRateDhaka,
    shippingRateOut,
    images,
    features,
    featuresDetails,
    thumbnailImage,
  } = req.body;

  if (
    (!title || !code || !description || !regularPrice || !categories,
    !weight ||
      !discountPrice ||
      !size ||
      !stockQuantity ||
      !shippingRateDhaka ||
      !shippingRateOut ||
      !images ||
      !features ||
      !thumbnailImage)
  ) {
    return res.status(400).json({ message: 'Invalid Data!' });
  }
  try {
    const newProduct = new Product({
      title,
      code,
      description,
      weight,
      regularPrice,
      discountPrice,
      price: Number(regularPrice) - Number(discountPrice),
      categories,
      size,
      thumbnailImage,
      images,
      features,
      featuresDetails,
      stockQuantity,
      shippingRateDhaka,
      shippingRateOut,
      shippingInDhaka: Number(shippingRateDhaka) * Number(weight),
      shippingOutDhaka: Number(shippingRateOut) * Number(weight),
    });

    await newProduct.save();

    return res.status(201).json({
      message: 'Product Created Successfully',
    });
  } catch (error) {
    console.log(error);
  }
};

const updateProduct = async (req, res) => {
  const { productId } = req.params;

  const {
    title,
    code,
    description,
    regularPrice,
    weight,
    discountPrice,
    categories,
    size,
    stockQuantity,
    shippingRateDhaka,
    shippingRateOut,
    images,
    features,
    featuresDetails,
    thumbnailImage,
  } = req.body;

  const updatedData = {
    title,
    code,
    description,
    weight,
    regularPrice,
    discountPrice,
    price: Number(regularPrice) - Number(discountPrice),
    categories,
    size,
    thumbnailImage,
    images,
    features,
    featuresDetails,
    stockQuantity,
    shippingRateDhaka,
    shippingRateOut,
    shippingInDhaka: Number(shippingRateDhaka) * Number(weight),
    shippingOutDhaka: Number(shippingRateOut) * Number(weight),
  };

  try {
    await Product.updateOne(
      { _id: productId },
      {
        $set: updatedData,
      }
    );

    res.status(200).json({ message: 'Product Updated Successfully!' });
  } catch (error) {
    console.log(error);
  }
};

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

const deleteProduct = async (req, res) => {
  const { productId } = req.params;
  try {
    await Product.deleteOne({ _id: productId });

    res.status(203).json({ message: 'Product  delete successful.' });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getProducts,
  productPagination,
  createProduct,
  updateProduct,
  deleteProduct,
  productById,
};
