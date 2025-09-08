// Load the Express library to create a web server and handle routes
const express = require('express');
const cors = require('cors');
const path = require('path');

const planetsRouter = require('./routes/planets/planets.router');

// Create an Express application
const app = express();

// Middleware to automatically parse incoming JSON data in requests
app.use(cors({
    origin: 'http://localhost:3000',
}));

// So that the data could be treated as a json file
app.use(express.json());

// Code to use and run the react frontend from this server -->> By using the app.use(express.static()) function 
// we will be serving the public folder that contains all the information to load the frontend
app.use(express.static(path.join(__dirname, '..', 'public')));

// Now we need to router our project to http://localhost:8000/index.html
app.get('/index.html', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

// Starting to use our first server
app.use(planetsRouter);

// Export the app so it can be used in other files (like server.js)
module.exports = app;