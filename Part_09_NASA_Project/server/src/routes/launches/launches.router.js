
// Import Express to create routes
const express = require('express');

// Create a new router for launchesRouter
const launchesRouter = express.Router();

// Function to get all the launches information 
launchesRouter.get('/launches', getAllLaunches);

// Exporting the module so that we can use it 
module.exports = launchesRouter;