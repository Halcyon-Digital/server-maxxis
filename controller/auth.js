const bcrypt = require('bcrypt');
const User = require('../models/userModel');
const { registerService } = require('../service/auth');
const generateToken = require('../service/token');

const register = async (req, res) => {
  const { userName, email, password, mobile } = req.body;
  if ((!userName || !email || !password, !mobile)) {
    return res.status(400).json({ message: 'Invalid Data' });
  }

  try {
    // Check if user exists
    const userExists = await User.findOne({ mobile });

    if (userExists) {
      return res.status(400).json({ message: 'user already exits' });
    }

    const user = await registerService({
      userName,
      email,
      password,
      mobile,
    });

    const userData = {
      userName: user.userName,
      email: user.email,
      mobile: user.mobile,
      token: generateToken(user._id),
      role: user.role,
      message: 'Registration Successfully!',
    };

    return res.status(201).json(userData);
  } catch (error) {
    console.log(error);
  }
};

const login = async (req, res) => {
  const { mobile, password } = req.body;
  if (!mobile || !password) {
    return res.status(400).json({ message: 'Invalid Data' });
  }

  // Check for user mobile
  const user = await User.findOne({ mobile });

  if (!user) {
    return res.status(404).json({ message: 'User Not Found!' });
  }

  const userData = {
    userName: user.userName,
    email: user.email,
    mobile: user.mobile,
    role: user.role,
  };

  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      ...userData,
      token: generateToken(user._id),
    });
  } else {
    res.status(400).json({ message: 'Invalid Password' });
  }
};

module.exports = {
  register,
  login,
};
