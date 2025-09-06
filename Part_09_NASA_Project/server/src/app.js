
// Importing the express module from express that we installed
const express = require('express');

// creating a server by help of express 
const app = express();

// For parsing the incomming data of JSON type from user side 
app.use(express.json());

// exporting this module to server.js
module.exports = app;