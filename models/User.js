const mongoose = require('mongoose');

// create a schema
const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: 'Full Name is required'
    },
    email: {
        type: String,
        required: 'Email is required',
        unique: true
    },
    mobile: {
        type: String,
        required: 'Mobile is required',
        unique: true
    },
    mobileNotification: {
        type: Boolean,
        default: true
    },
    emailNotification: {
        type: Boolean,
        default: false
    }
});

// compile the schema into a model which gives a class
mongoose.model('User', userSchema);