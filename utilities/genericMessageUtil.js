var twilio = require('twilio');

exports.sendMessage = async function(receiver, body) {

    var accountSid = ''; // Your Account SID from www.twilio.com/console
    var authToken = ''; // Your Auth Token from www.twilio.com/console

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