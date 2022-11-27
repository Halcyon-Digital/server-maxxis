const bcrypt = require('bcrypt');
const { createNewUser } = require('./user');

const registerService = async ({ userName, email, password, mobile }) => {
  //   Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  return createNewUser({
    userName,
    email,
    password: hashedPassword,
    mobile,
  });
};

module.exports = {
  registerService,
};
