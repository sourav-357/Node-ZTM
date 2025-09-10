
// Import Express to create routes
const express = require('express');

// Importing the getAllLaunches Function from different module
const {
    httpGetAllLaunches,
    httpAddNewLaunch,
    httpAbortLaunch,
} = require('./launches.controller');

// Create a new router for launchesRouter
const launchesRouter = express.Router();

// Function to get all the launches information 
launchesRouter.get('/', httpGetAllLaunches);

// Function to add the launches information 
launchesRouter.post('/', httpAddNewLaunch);

// Function to delete any mission 
launchesRouter.delete('/:id', httpAbortLaunch);

// Exporting the module so that we can use it 
module.exports = launchesRouter;

