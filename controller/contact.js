const Contact = require("../models/contactModel");

const getContact = async (req, res) => {
  try {
    const contacts = await Contact.find({});

    res.status(201).json(contacts);
  } catch (error) {
    console.log(error);
  }
};
const createContact = async (req, res) => {
  const contactData = req.body;

  try {
    const newContact = new Contact(contactData);
    await newContact.save();

    res.status(200).json({ message: "Message Sent successfully." });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createContact,
  getContact,
};
