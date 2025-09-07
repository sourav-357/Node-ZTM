// Load the Express library to create a web server and handle routes
const express = require('express');
const cors = require('cors');

const planetsRouter = require('./routes/planets/planets.router');

// Create an Express application
const app = express();

// Middleware to automatically parse incoming JSON data in requests
app.use(cors({
    origin: 'http://localhost:3000',
}));
app.use(express.json());
app.use(planetsRouter);

// Export the app so it can be used in other files (like server.js)
module.exports = app;
