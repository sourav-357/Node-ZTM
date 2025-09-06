
// Importing the express module from express that we installed
const express = require('express');

// Importing CORS -->> (Cross origin requests) so that our client at server localhost:3000 could access the server at localhost:8000
const cors = require('cors');

// creating a server by help of express 
const app = express();

// Importing the planet router module
const planetRouter = require('./routes/planets/planets.router.js');

// Allowing the localhost:3000 by help of cors 
app.use(cors({ // There could be many urls hence we are using a JSON by cors({}) 
    // The url which we want to allow
    origin: 'http://localhost:3000',
}));

// For parsing the incomming data of JSON type from user side 
app.use(express.json());

// Using the function for getting Planets by help of the router
app.use(planetRouter);

// exporting this module to server.js
module.exports = app;

