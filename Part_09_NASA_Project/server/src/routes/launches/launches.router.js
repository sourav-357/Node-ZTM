// Import Express to create routes
const express = require('express');

// Import controller functions that handle the logic for launches
// Controllers contain the business logic, routers just define the routes
const {
    httpGetAllLaunches,
    httpAddNewLaunch,
    httpAbortLaunch,
} = require('./launches.controller');

// Create a new Express router instance
// This router will handle all routes related to launches
const launchesRouter = express.Router();

// Define a GET route to retrieve all launches
// When someone makes a GET request to /launches, this route handles it
// Example: GET http://localhost:8000/launches
launchesRouter.get('/', httpGetAllLaunches);

// Define a POST route to add a new launch
// When the frontend submits the launch form, it sends a POST request here
// Example: POST http://localhost:8000/launches (with launch data in body)
launchesRouter.post('/', httpAddNewLaunch);

// Define a DELETE route to abort a launch
// The :id is a route parameter that captures the launch ID from the URL
// Example: DELETE http://localhost:8000/launches/100 (aborts launch #100)
launchesRouter.delete('/:id', httpAbortLaunch);

// Export the router so it can be used in app.js
// In app.js, this router will be mounted at the /launches path
module.exports = launchesRouter;

