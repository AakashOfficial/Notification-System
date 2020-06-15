const mongoose = require('mongoose');

// create a schema
const notificationSchema = new mongoose.Schema({
    notificationHeader: {
        type: String,
        required: 'Notification Header is required'
    },
    notificationMessage: {
        type: String,
        required: 'Notification Message is required',
    },
    userID: {
        type: String,
        required: 'UserID is required',
    },
    isRead: {
        type: Boolean,
        default: false
    }
});

// compile the schema into a model which gives a class
mongoose.model('Notification', notificationSchema);