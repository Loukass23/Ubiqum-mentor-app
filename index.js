
var express = require("express"),
    fs = require('fs'),
    readline = require('readline'),
    { google } = require('googleapis'),
    request = require('request'),
    GoogleSpreadsheet = require('google-spreadsheet'),
    creds = require('./client_secret.json'),
    app = express(),
    bodyParser = require('body-parser');

// const express = require('express');
// const bodyParser = require('body-parser');
// // const mongoose = require('mongoose');
// // const cors = require('cors')
// // const passport = require('passport');
// const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
    }));

const studentsRoute = require('./routes/students');
app.use('/students/', studentsRoute);


const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Express server running on port ${port}`)
});