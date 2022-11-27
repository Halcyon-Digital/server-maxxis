const Tire = require('../models/tireModel');

const getTires = async (_req, res) => {
  try {
    const response = await Tire.find();
    res.status(201).json(response);
  } catch (error) {
    console.log(error);
  }
};

const makeTire = async (req, res) => {
  const { title } = req.body;
  const { filename } = req.file;
  try {
    const newTire = new Tire({ image: filename, title });
    await newTire.save();

    res.status(200).json({ message: 'Tire Create Successfully' });
  } catch (error) {
    console.log(error);
  }
};

const updateTire = async (req, res) => {
  const { title } = req.body;
  const { id } = req.params;
  try {
    await Tire.findByIdAndUpdate(
      { _id: id },
      { $set: { image: req?.file?.filename, title: title } }
    );

    res.status(201).json({ message: 'Tire Updated Successfully' });
  } catch (error) {
    console.log(error);
  }
};

const deleteTire = async (req, res) => {
  const { id } = req.params;

  try {
    await Tire.deleteOne({ _id: id });

    res.status(203).json({ message: 'Tire  delete successful.' });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getTires,
  makeTire,
  updateTire,
  deleteTire,
};
