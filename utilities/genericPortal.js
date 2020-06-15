const mongoose = require('../node_modules/mongoose');
let Notification = mongoose.model('Notification');

// insert the user to Database
exports.sendPortal = async function(receiver, body) {

    var notification = new Notification();
    notification.notificationHeader = req.body.notificationHeader;
    notification.notificationMessage = req.body.notificationMessage;
    notification.userID = req.body.userID;
    notification.isRead = req.body.isRead;

    try {
        const result = await notification.save();
        return true;
    } catch (error) {
        return false;
    }


}