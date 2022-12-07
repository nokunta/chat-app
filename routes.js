var express = require('express');
var app = express();

// Defining all the routes
var index = require('./routes/index');
var users = require('./routes/users');
var message = require('./routes/message');


// Linking all the routes
app.use('/', index);
app.use('/users', users);
app.use('/message', message);

module.exports = app;
