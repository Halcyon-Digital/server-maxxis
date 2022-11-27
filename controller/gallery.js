const Gallery = require("../models/galleryModel");

const getGallery = async (req, res) => {
  const query = req.query;
  try {
    const response = await Gallery.find(query);
    res.status(201).json(response);
  } catch (error) {
    console.log(error);
  }
};

const makeGallery = async (req, res) => {
  const { filename } = req.file;

  try {
    const newGallery = new Gallery({ image: filename });
    await newGallery.save();

    res.status(200).json({ message: "Gallery Create Successfully" });
  } catch (error) {
    console.log(error);
  }
};

const deleteGallery = async (req, res) => {
  const { id } = req.params;

  try {
    await Gallery.deleteOne({ _id: id });

    res.status(203).json({ message: "Gallery  delete successful." });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getGallery,
  makeGallery,
  deleteGallery,
};
