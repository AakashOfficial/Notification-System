require('./models/db');

const express = require('express');

const app = express();

var bodyParser = require("body-parser");
var mongodb = require('mongodb');
var path = require("path");
var cors = require('cors');

// const userController = require('./controllers/userController');

// to include form data into req parameter
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use(cors());

// app.use('/user', userController);

// PORT
var server = app.listen(process.env.PORT || 8080, function() {
    var port = server.address().port;
    console.log("App now running on port", port);
});