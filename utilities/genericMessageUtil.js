var twilio = require('twilio');

exports.sendMessage = async function(receiver, body) {

    var accountSid = 'ACebd7573a45b1a2b76ee073585cbd907c'; // Your Account SID from www.twilio.com/console
    var authToken = '571908c4e77ae8ff35e1a5b63f0a6afa'; // Your Auth Token from www.twilio.com/console

    var client = new twilio(accountSid, authToken);
    try {
        await client.messages.create({
                body: 'Hello from Node',
                to: '+91' + receiver, // Text this number
                from: '+19203156099' // From a valid Twilio number
            })
            .then((message) => console.log(message.sid));

        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}