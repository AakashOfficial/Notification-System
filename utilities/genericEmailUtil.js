const sgMail = require('../node_modules/@sendgrid/mail');
const path = require('../node_modules/path');
var postmark = require("../node_modules/postmark");

require('../node_modules/dotenv').config({ path: path.resolve(__dirname, '../.env') });

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// console.log(process.env.SENDGRID_API_KEY);

let msg = {
    from: '19aakash33@gmail.com',
};

exports.sendEmail = async function(receiver, subject, body) {

    const { SocketLabsClient } = require('@socketlabs/email');

    const serverId = 33080;
    const injectionApiKey = "a2A9Dxk3WHc45YsTz6w7";

    const client = new SocketLabsClient(serverId, injectionApiKey);

    const message = {
        to: receiver,
        from: "aakash.tyagi@nagarro.com",
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
    // const mailjet = await require('node-mailjet')
    //     .connect('efb7ffa9e1383cf0af3b4f3329f6ff1b', 'cc8d0a60da008c2ab552a1c6d1ba3548');

    // const request = await mailjet
    //     .post("send", { 'version': 'v3.1' })
    //     .request({
    //         "Messages": [{
    //             "From": {
    //                 "Email": "19aakash33@gmail.com",
    //                 "Name": "Aakash"
    //             },
    //             "To": [{
    //                 "Email": receiver,
    //                 "Name": receiver
    //             }],
    //             "Subject": subject,
    //             "TextPart": body,
    //             "HTMLPart": "<h3>Dear passenger 1, welcome to <a href='https://www.mailjet.com/'>Mailjet</a>!</h3><br />May the delivery force be with you!",
    //             "CustomID": "AppGettingStartedTest"
    //         }]
    //     })
    //     .then((result) => {
    //         console.log(result);
    //         console.log(result.body)
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //         console.log(err.statusCode);
    //     });

    // msg['to'] = receiver;
    // msg['subject'] = subject;
    // msg['html'] = body;
    // msg['text'] = 'Hello';

    // console.log(msg);
    // return true;


    // try {
    //     let result = await sgMail.send(msg);
    //     console.log('aya');
    //     return result;
    // } catch (err) {
    //     console.log(err);
    //     return err.message;
    // }
}