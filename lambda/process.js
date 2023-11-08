// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
const formData = require('form-data');
const Mailgun = require('mailgun.js');
const mailgun = new Mailgun(formData);
const mg = mailgun.client({username: 'api', key: process.env.MAILGUN_API_KEY || '0d49a25d9c6d9164f7f79fd0f563dd6f-8c9e82ec-577e7ef3'});

const handler = async (event) => {
  try {
    const contactMsg = JSON.parse(event.body || '{}')
    const {name, email, message, phone} = contactMsg
    const msg = await mg.messages.create('mail.nkdanceservices.com', {
      from: `${name} <${email}>`,
      to: ["kaosochi@mail.nkdanceservices.com"],
      subject: `NK Dance Services Contact Us - ${name}`,
      text: message,
      html: `<p>Phone: ${phone}</p>
              <p>Message: ${message}</p>`
    })
    console.log('Message response', msg)

    return {
      statusCode: 200,
      body: JSON.stringify({ message: msg }),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
