const Dealer = require("../models/dealerModel");

const getDealer = async (req, res) => {
  try {
    const dealer = await Dealer.find();
    res.status(200).json(dealer);
  } catch (error) {
    console.log(error);
  }
};

const createDealer = async (req, res) => {
  const { name, companyName, mobile, email, message } = req.body;
  const { filename } = req.file;

  if (!name || !companyName || !mobile || !email || !message || !filename) {
    return res.status(404).json({ message: "Invalid Data" });
  }

  try {
    const dealer = new Dealer({
      name,
      companyName,
      mobile,
      email,
      file: filename,
      message,
    });
    await dealer.save();

    res.status(200).json({ message: "Dealer Registration successfully." });
  } catch (error) {
    console.log(error.message);
  }
};

const deleteDealer = async (req, res) => {
  const { id } = req.params;

  try {
    await Dealer.findByIdAndDelete({ _id: id });

    res.status(200).json({ message: "Dealer deleted successfully" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getDealer, createDealer, deleteDealer };
