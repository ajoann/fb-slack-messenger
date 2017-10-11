// NPM packages
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Local Imports
const { rtm, web } = require ('./services/slackrtm');
// const routes = require('./routes/routes');
// const dbconfig = require('./config/database');

// Global Variables
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
// app.use('/', routes);

// mongoose.connect(dbconfig.url);

// Start Server
app.listen(port, () => {
  console.log('This server is listening on port', port);
});

// Start Slack Websockwts
rtm.start();
