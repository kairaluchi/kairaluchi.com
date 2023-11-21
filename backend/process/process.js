const nodeMailer = require('nodemailer');
const mailchimpClient = require("@mailchimp/mailchimp_transactional")(
  process.env.MAILCHIMP_API_KEY
);

const sendEmailZoho = async (html, subject) => {
  let transporter = nodeMailer.createTransport({
    host: "smtppro.zoho.com",
    secure: true,
    port: 465,
    auth: {
      user: process.env.ZOHO_EMAIL,
      pass: process.env.ZOHO_PASSWORD
    },
  });

  const mailOptions = {
    from: "no-reply@nkdanceservices.com",
    to: "kaosochi@nkdanceservices.com",
    subject,
    html,
   };

   try {
    await transporter.sendMail(mailOptions, function(err, info) {
      if (err) {
        console.log('Zoho ERROR', err)
      }
      console.log('Zoho Info: ', info)
    })
   } catch (error) {
    console.log('Zoho ERROR', error)
   }
}

const sendEmail = async (message) => {
  try {
    const response = await mailchimpClient.messages.send({
      message
    });
    console.log(response);
    return response
  } catch (error) {
    console.error('sendEmail: ', error)
    return null
  }
};

const handler = async (event) => {
  try {
    console.log('Event: ', event)

    const {html, subject} = event.queryStringParameters

    await sendEmailZoho(html, subject)
    
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
