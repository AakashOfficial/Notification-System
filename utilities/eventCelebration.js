const { sendEmail } = require('../utilities/genericEmailUtil');
const { sendPortal } = require('../utilities/genericPortal');

exports.sendNotify = async function(receiver, subject, body, communicationMode) {

    if (communicationMode = 'Email') {
        let response = await sendEmail(receiver, subject, body);
        // console.log(response);
        return response;
    } else {
        let response = await sendPortal(receiver, body);
        // console.log(response);
        return response;
    }
}