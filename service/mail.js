const nodemailer = require('nodemailer');

const sentMail = async (req, res) => {
  const { customerInfo, _id } = req.order;
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'localhost',
    auth: {
      user: process.env.USER_MAIL,
      pass: process.env.USER_PASS,
    },
  });

  const mailOptions = {
    from: 'mdshekhtalha@gmail.com',
    to: customerInfo.email,

    //   N:B: You can use text or html for message body. so yo have to choose text or html
    subject: 'Maxxis Order ✔', // Subject line
    //text: 'Hello world?', // plain text body
    html: `<b>Congratulations!</b> <br/> <p><b>${customerInfo.name}</b>,
     your order is sent successfully. </br> your Order <b> ID: ${_id}</b> Our admin contact you soon.
      </br> Do you have any question please contact on whatsapp 01724721383</p>

      <h4><b>Your Order Invoice</b></h4>
      http://localhost:3000/order/invoice/${_id}
      `, // html body
  };

  await transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      res.status(200).json(req.order);
    }
  });
};

module.exports = {
  sentMail,
};
