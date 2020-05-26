// Import Mongoose module
const mongoose = require('../node_modules/mongoose');

mongoose.connect('mongodb+srv://test_user:Password123@mongocluster-vahm9.gcp.mongodb.net/notificationsystem?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB...', err));

require('./User');