const mailchimpClient = require("@mailchimp/mailchimp_transactional")(
  process.env.MAILCHIMP_API_KEY
);

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
    const contactMsg = JSON.parse(event.body || '{}')
    const {
      name = '',
      email = '',
      message = '',
      phone = ''
    } = contactMsg
    const msg = {
      "from_email": 'no-reply@nkdanceservices.com',
      "subject": `NK dance services contact use from ${[name, email, phone].join(' - ')}`,
      "text": `${[name, email, phone].join(' - ')}\n${message}`,
      "to": [{
        "email": "kaosochi@nkdanceservices.com",
        "type": "to"
      }]
    }

    const res = await sendEmail(msg)

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: res
      }),
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
