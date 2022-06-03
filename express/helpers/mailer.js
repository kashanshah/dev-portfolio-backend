const nodemailer = require("nodemailer");

async function sendMail(to, from, subject, body) {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount, transporter;
  
  if(process.env.NODE_ENV === 'development') {
    testAccount = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: testAccount.user, // generated ethereal user
        pass: testAccount.pass, // generated ethereal password
      },
    });
  } else{
    transporter = nodemailer.createTransport({
      // pool: true,
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      // secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USERNAME, // generated ethereal user
        pass: process.env.SMTP_PASSPORT, // generated ethereal password
      },
    });
  }
  // send mail with defined transport object
  let info = await transporter?.sendMail({
    from: from, // sender address
    to: to, // list of receivers
    subject: subject, // Subject line
    // text: , // plain text body
    html: body, // html body
  });

  // console.log("Message sent: %s", info, info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  return info;
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

module.exports = sendMail;
