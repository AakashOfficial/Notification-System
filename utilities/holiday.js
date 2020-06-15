const { sendPortal } = require('../utilities/genericPortal');

exports.sendNotify = async function(receiver, subject, body, communicationMode) {

    let response = await sendPortal(receiver, body);
    // console.log(response);
    return response;
}