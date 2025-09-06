
// Importing the express module
const express = require('express');

// Importing the functions of planets from planet.controller module and destructuring its functions
const {
    getAllPlanets,
} = require('./planets.controller.js');

// creating a router for planets
const planetRouter = express.Router();

// Setting up the respond for '/planets' get request
planetRouter.get('/planets', getAllPlanets);

module.exports = planetRouter;