const notificationtype = require('../utilities/notificationTypeEnum');
const { sendEmail } = require('../utilities/genericEmailUtil');
const urgentHelps = require('../utilities/urgentHelp');
const eventCelebration = require('../utilities/eventCelebration');
const holiday = require('../utilities/holiday');
const nagarroNews = require('../utilities/nagarroNews');
const newPolicy = require('../utilities/newPolicy');

exports.sendNotification = async function(receiver, notificationType, emailHeader, emailBody, communicationMode) {

    if (notificationType == 'urgentHelp') {
        const sendResponse = await urgentHelps.sendNotify(receiver, emailHeader, emailBody, communicationMode);
        return sendResponse;

    } else if (notificationType == 'eventCelebration') {
        const sendResponse = await eventCelebration.sendNotify(receiver, emailHeader, emailBody, communicationMode);
        return sendResponse;

    } else if (notificationType == 'holiday') {
        const sendResponse = await holiday.sendNotify(receiver, emailHeader, emailBody, communicationMode);
        return sendResponse;

    } else if (notificationType == 'nagarroNews') {
        const sendResponse = await nagarroNews.sendNotify(receiver, emailHeader, emailBody, communicationMode);
        return sendResponse;

    } else if (notificationType == 'newPolicy') {
        const sendResponse = await newPolicy.sendNotify(receiver, emailHeader, emailBody, communicationMode);
        return sendResponse;
    } else {
        return false;
    }
}