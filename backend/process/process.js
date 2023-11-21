const nodemailer = require('nodemailer');

const sendEmailZoho = (html, subject) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtppro.zoho.com",
      secure: true,
      port: 465,
      auth: {
        user: process.env.ZOHO_EMAIL,
        pass: process.env.ZOHO_PASSWORD
      },
    });

    console.log('nodemailer transporter: ', transporter)

    const mailOptions = {
      from: "no-reply@nkdanceservices.com",
      to: "kaosochi@nkdanceservices.com",
      subject,
      html,
    };


    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log('Zoho ERROR', err)
      }
      console.log('Zoho Info: ', info)
    })
  } catch (error) {
    console.log('Zoho ERROR', error)
  }
}

const handler = async (event) => {
  try {
    console.log('Event: ', event)

    const {
      html,
      subject
    } = event.queryStringParameters

    sendEmailZoho(html, subject)

    return {
      statusCode: 200,
      body: '',
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: error.toString()
    }
  }
}

module.exports = {
  handler
}