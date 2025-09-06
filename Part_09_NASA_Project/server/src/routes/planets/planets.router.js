
// Importing the express module
const express = require('express');

// creating a router for planets
const planetRouter = express.Router();

// Setting up the respond for '/planets' get request
planetRouter.get('/planets', getAllPlanets);

module.exports = planetRouter;