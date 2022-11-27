const TireSize = require('../models/TireSizeModel');

const getTireSize = async (_req, res) => {
  try {
    const size = await TireSize.find();
    res.status(200).json(size);
  } catch (error) {
    console.log(error);
  }
};

const createTireSize = async (req, res) => {
  try {
    const newTireSize = new TireSize(req.body);
    await newTireSize.save();

    res.status(200).json({ message: 'Tire Size added successfully.' });
  } catch (error) {
    console.log(error);
  }
};

const deleteTireSize = async (req, res) => {
  const { id } = req.params;

  try {
    await TireSize.findByIdAndDelete({ _id: id });

    res.status(200).json({ message: 'Tire Size deleted successfully' });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getTireSize,
  createTireSize,
  deleteTireSize,
};
