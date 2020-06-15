const { sendEmail } = require('../utilities/genericEmailUtil');
const { sendMessage } = require('../utilities/genericMessageUtil');

exports.sendNotify = async function(receiver, subject, body, communicationMode) {

    if (communicationMode == 'Email') {

        let response = await sendEmail(receiver, subject, body);
        // console.log(response);
        return response;
    } else {
        let response = await sendMessage(receiver, body);
        // console.log(response);
        return response;
    }

}