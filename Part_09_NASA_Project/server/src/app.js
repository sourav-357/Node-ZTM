
// Importing the express module from express that we installed
const express = require('express');

// creating a server by help of express 
const app = express();

// Importing the planet router module
const planetRouter = require('./routes/planets/planets.router.js');

// For parsing the incomming data of JSON type from user side 
app.use(express.json());

// Using the function for getting Planets by help of the router
app.use(planetRouter);

// exporting this module to server.js
module.exports = app;