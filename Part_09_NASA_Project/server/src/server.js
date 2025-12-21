const http = require('http');
const mongoose = require('mongoose');
const app = require('./app');
const { loadPlanetsData } = require('./models/planets.model');

// Using environment variables for flexibility in different deployment scenarios
const PORT = process.env.PORT || 8000;
const MONGO_URL = process.env.MONGO_URL || 'mongodb+srv://souravdev:sourav1976@namstenodejs.4v6bcyl.mongodb.net/devTinder';

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

// Graceful shutdown handling
let isShuttingDown = false;

function gracefulShutdown(signal) {
    if (isShuttingDown) {
        console.log('Shutdown already in progress...');
        return;
    }
    
    isShuttingDown = true;
    console.log(`Received ${signal}. Starting graceful shutdown...`);
    
    // Stop accepting new connections
    server.close((err) => {
        if (err) {
            console.error('Error closing HTTP server:', err);
        } else {
            console.log('HTTP server closed');
        }
        
        // Close database connections
        mongoose.connection.close(false, (err) => {
            if (err) {
                console.error('Error closing MongoDB connection:', err);
                process.exit(1);
            } else {
                console.log('MongoDB connection closed');
                console.log('Graceful shutdown completed');
                process.exit(0);
            }
        });
    });
    
    // Force shutdown after timeout if graceful shutdown takes too long
    setTimeout(() => {
        console.error('Graceful shutdown timeout. Forcing exit...');
        process.exit(1);
    }, 10000); // 10 second timeout
}

// Register signal handlers
process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
process.on('SIGINT', () => gracefulShutdown('SIGINT'));

// Handle uncaught exceptions and unhandled rejections
process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception:', err);
    gracefulShutdown('uncaughtException');
});

process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
    gracefulShutdown('unhandledRejection');
});

