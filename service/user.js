const User = require("../models/userModel");

const createNewUser = ({ userName, email, password, mobile }) => {
  const user = new User({
    userName,
    email,
    password,
    mobile,
  });
  return user.save();
};

module.exports = {
  createNewUser,
};
