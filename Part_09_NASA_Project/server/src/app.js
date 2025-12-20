const express = require('express');
const cors = require('cors');
const path = require('path');
const morgan = require('morgan');

const planetsRouter = require('./routes/planets/planets.router');
const launchesRouter = require('./routes/launches/launches.router');

const app = express();

// CORS config for frontend - allowing localhost:3000 during development
// In production, would restrict this to actual frontend domain
app.use(cors({
    origin: 'http://localhost:3000',
}));

// Morgan for request logging - disabled by default to reduce console noise
// Uncomment when debugging API calls
// app.use(morgan('combined'));

// Parse JSON request bodies
app.use(express.json());

// Serve static files from public directory (built React app)
app.use(express.static(path.join(__dirname, '..', 'public')));

// Fallback route for client-side routing
// Serves index.html for all routes not matching API endpoints
app.get('/index.html', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

// API routes
app.use('/planets', planetsRouter);
app.use('/launches', launchesRouter);

module.exports = app;

