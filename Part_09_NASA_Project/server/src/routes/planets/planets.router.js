// Import Express to create routes
const express = require('express');

// Import the planets controller file (make sure spelling is correct!)
const { httpGetAllPlanets } = require('./planets.controller');

// Create a new router for planets
const planetsRouter = express.Router();

// When someone goes to /planets (GET request), run getAllPlanets function
planetsRouter.get('/', httpGetAllPlanets);

// Export the router so it can be used in app.js
module.exports = planetsRouter;

