const nodemailer = require('nodemailer');

const sendEmail = (html, subject) => {
  const transporter = nodemailer.createTransport({
    host: "smtppro.zoho.com",
    secure: true,
    port: 465,
    auth: {
      user: process.env.ZOHO_EMAIL,
      pass: process.env.ZOHO_PASSWORD
    },
  });

  console.log('nodeMailer transporter: ', transporter)

  const mailOptions = {
    from: "no-reply@nkdanceservices.com",
    to: "kaosochi@nkdanceservices.com",
    subject,
    html,
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log('Zoho ERROR', err)
        return reject(err)
      }
      console.log('Zoho Info: ', info)
      return resolve(info)
    })
  })
}

const handler = async (event) => {
  try {
    console.log('Event: ', event)

    const {
      html,
      subject
    } = event.queryStringParameters

    const response = await sendEmail(html, subject)
    console.log('RESPONSE: ', response)

    return {
      statusCode: 200,
      body: '',
    }
  } catch (error) {
    console.log('ERROR: ', error)
    return {
      statusCode: 500,
      body: error.toString()
    }
  }
}

module.exports = {
  handler
}