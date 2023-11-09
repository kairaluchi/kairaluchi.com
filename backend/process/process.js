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
    console.log('passed body: ', contactMsg)
    const {
      name,
      email,
      message,
      phone
    } = contactMsg
    const msg = {
      "from_email": 'no-reply@nkdanceservices.com',
      "subject": `NK Dance Services Contact Us Form: from ${[name, email, phone].join(' - ')}`,
      "text": `${[name, email, phone].join(' ; ')}\n${message}`,
      "to": [{
        "email": "kaosochi@nkdanceservices.com",
        "type": "to"
      }]
    }

    const emailResponse = await sendEmail(msg)
    
    console.log('emailResponse: ', emailResponse)

    const [res = {}] = emailResponse

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: res.status
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
