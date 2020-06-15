const sgMail = require('../node_modules/@sendgrid/mail');
const path = require('../node_modules/path');
var postmark = require("../node_modules/postmark");

require('../node_modules/dotenv').config({ path: path.resolve(__dirname, '../.env') });

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.sendEmail = async function(receiver, subject, body) {

    const { SocketLabsClient } = require('@socketlabs/email');

    const serverId = "";
    const injectionApiKey = "";

    const client = new SocketLabsClient(serverId, injectionApiKey);

    const message = {
        to: receiver,
        from: "",
        subject: subject,
        textBody: body,
        htmlBody: "<html><body>" + body + "</body></html>",
        messageType: 'basic'
    };

    const result = await client.send(message).then(
        (res) => {
            //Handle successful API call
            console.log(res);
            return true;
        },
        (err) => {
            //Handle error making API call
            console.log(err);
            return false;
        });

    if (result) {
        return true;
    } else {
        return false;
    }
}