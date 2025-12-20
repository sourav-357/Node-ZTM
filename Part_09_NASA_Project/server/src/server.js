const http = require('http');
const mongoose = require('mongoose');
const app = require('./app');
const { loadPlanetsData } = require('./models/planets.model');

// Using environment variables for flexibility in different deployment scenarios
const PORT = process.env.PORT || 8000;
const MONGO_URL = process.env.MONGO_URL || 'mongodb+srv://souravkumar357:JaiGurudev357@cluster0.zjubkdn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const server = http.createServer(app);

// MongoDB connection event handlers
mongoose.connection.once('open', () => {
    console.log('MongoDB connection ready!');
});

mongoose.connection.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});

// Server startup sequence - connect to DB first, then load data, then start listening
async function startServer() {
    try {
        await mongoose.connect(MONGO_URL);
        await loadPlanetsData();

        server.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}...`);
        });
    } catch (error) {
        console.error('Failed to start server:', error);
        process.exit(1);
    }
}

startServer();

