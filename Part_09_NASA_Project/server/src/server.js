// Load Node.js module to create an HTTP server
const http = require('http');

// Load your Express app which handles all routes and logic
const app = require('./app');

const { loadPlanetsData } = require('./models/planets.model');

// Get the port number from environment variables (useful for hosting)
// If no port is set, use 8000 as default
const PORT = process.env.PORT || 8000;

// Connecting to the mongo url by copy pasting the url provided to us 
const MONGO_URL = 'mongodb+srv://xsouravkumar357:J@igurudev_357@cluster0.smwhnqc.mongodb.net/nasa?retryWrites=true&w=majority&appName=Cluster0';
// Replace <db_password> with the password for the xsouravkumar357 database user

// Create an HTTP server that uses your Express app to handle requests
const server = http.createServer(app);

async function startServer(){

    await loadPlanetsData();

    // Start the server and listen on the specified port
    // When the server starts, print a message in the console
    server.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}...`);
    });
}

startServer();
//.....

