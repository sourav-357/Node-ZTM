// Import Express to create routes
const express = require('express');

// Import the controller function that handles the logic for getting all planets
// Controllers contain the business logic, routers just define the routes
const { httpGetAllPlanets } = require('./planets.controller');

// Create a new Express router instance
// Routers are like mini-apps that handle a group of related routes
// This router will handle all routes related to planets
const planetsRouter = express.Router();

// Define a GET route for the root path of this router
// When someone makes a GET request to /planets, this route will handle it
// The httpGetAllPlanets function will be called to process the request
planetsRouter.get('/', httpGetAllPlanets);

// Export the router so it can be used in app.js
// In app.js, this router will be mounted at the /planets path
module.exports = planetsRouter;

