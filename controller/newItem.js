const Item = require("../models/newItemModel");

const allItem = async (_req, res) => {
  const response = await Item.find({});
  return res.status(200).json(response);
};

const getItems = async (req, res) => {
  const { page, size } = req.query;

  try {
    if (page && size) {
      const response = await Item.find({})
        .skip(page * size)
        .limit(size);

      return res.status(200).json(response);
    }
  } catch (error) {
    console.log(error);
  }
};

const makeItem = async (req, res) => {
  const { item } = req.body;
  const { filename } = req.file;

  try {
    const newItem = new Item({ image: filename, item });
    await newItem.save();

    res.status(200).json({ message: "Item Create Successfully" });
  } catch (error) {
    console.log(error);
  }
};

const updateItem = async (req, res) => {
  const { item } = req.body;
  const { id } = req.params;
  try {
    await Item.findByIdAndUpdate(
      { _id: id },
      { $set: { image: req?.file?.filename, item: item } }
    );

    res.status(201).json({ message: "Item Updated Successfully" });
  } catch (error) {
    console.log(error);
  }
};

const deleteItem = async (req, res) => {
  const { id } = req.params;

  try {
    await Item.deleteOne({ _id: id });

    res.status(203).json({ message: "Item  delete successful." });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  allItem,
  getItems,
  makeItem,
  updateItem,
  deleteItem,
};
