const express = require('../node_modules/express');
const router = express.Router();
const mongoose = require('../node_modules/mongoose');
let User = mongoose.model('User');
const { sendEmail } = require('../utilities/genericEmailUtil');
var cors = require('cors');

router.post("/send", cors({
    origin: 'http://localhost:4200'
}), async function(req, res) {

    let response = await sendEmail(req.body.email, 'Please Confirm Your Faevaa Pay Account', 'Testing in Progress');
    console.log(response)
    if (response[0]['statusCode'] != undefined && response[0]['statusCode'] === 202) {
        res.json({ "status": "Email Sent", "error": false }).status(200);
    } else {
        res.json({ "status": "Email Not Valid. Please try Different Email  ", "error": true }).status(200);
    }

});

// get the All Users 
router.get("/", cors({
    origin: 'http://localhost:4200'
}), async function(req, res) {
    console.log(process.env.SENDGRID_API_KEY);
    try {
        let users = await User.find({});
        res.send(users).status(200);
    } catch (error) {
        res.send(error.message);
    }
});

// get the User by the user id
router.get("/:id", cors(), async function(req, res) {
    try {
        let user = await User.findById(req.params.id);
        res.send(user).status(200);
    } catch (error) {
        res.send(error.message);
    }
});

// insert the user to Database
router.post("/", cors(), async function(req, res) {

    var query = { "email": req.body.email };
    try {
        let checkNotExistsUser = await User.findOne(query);
        if (checkNotExistsUser == null) {

            var user = new User();
            user.fullName = req.body.fullName;
            user.mobile = req.body.mobile;
            user.email = req.body.email;
            user.mobileNotification = req.body.mobileNotification;
            user.emailNotification = req.body.emailNotification;

            await user.save(function(err, doc) {
                if (err) res.json(err);
                else res.json({ "status": "saved", "error": false }).status(200);
            });

        } else {
            res.json({ "status": "User With this Email Already Exists", "error": true })
                .status(200);
        }
    } catch (error) {
        res.send(error);
    }
});

// api for delete the user By ID
router.delete("/:_id", cors(), async function(req, res) {
    User.findByIdAndRemove(req.params._id, (err, doc) => {
        if (!err) {
            res.status(200).json({ "status": "Deleted", "error": false });
        } else {
            res.json(err);
        }
    });
});

module.exports = router;