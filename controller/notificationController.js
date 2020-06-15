const express = require('../node_modules/express');
const router = express.Router();
const notification = require('../utilities/sendNotification');
var cors = require('cors');

router.post("/send", cors(), async function(req, res) {
    console.log(req.body);
    const responseEmail = await notification.sendNotification(req.body.email, req.body.notificationType, req.body.emailHeader, req.body.emailBody, req.body.communicationMode);
    console.log(responseEmail);
    if (responseEmail) {
        res.json({ 'status': 'Send', error: 'false' });
    } else {
        res.json({ 'status': 'Not Send', error: 'false' });
    }
    // if (responseEmail[0]['statusCode'] != undefined && responseEmail[0]['statusCode'] === 202) {
    //     res.json({ "status": "Email Sent", "error": false }).status(200);
    // } else {
    //     res.json({ "status": "Email Not Valid. Please try Different Email  ", "error": true }).status(200);
    // }

});

module.exports = router;