const Banner = require("../models/bannerModel");

const getBanners = async (req, res) => {
  const query = req.query;
  try {
    const response = await Banner.find(query);
    res.status(201).json(response);
  } catch (error) {
    console.log(error);
  }
};

const makeBanner = async (req, res) => {
  const { page } = req.body;
  const { filename } = req.file;

  try {
    const newBanner = new Banner({ image: filename, page });
    await newBanner.save();

    res.status(200).json({ message: "Banner Create Successfully" });
  } catch (error) {
    console.log(error);
  }
};

const updateBanner = async (req, res) => {
  const { page } = req.body;
  const { id } = req.params;
  try {
    await Banner.findByIdAndUpdate(
      { _id: id },
      { $set: { image: req?.file?.filename, page: page } }
    );

    res.status(201).json({ message: "Banner Updated Successfully" });
  } catch (error) {
    console.log(error);
  }
};

const deleteBanner = async (req, res) => {
  const { id } = req.params;

  try {
    await Banner.deleteOne({ _id: id });

    res.status(203).json({ message: "Banner  delete successful." });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getBanners,
  makeBanner,
  updateBanner,
  deleteBanner,
};
