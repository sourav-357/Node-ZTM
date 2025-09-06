
// Importing the http module
const http = require('http');

// Importing the express module from app.js 
const app = require('./app.js');

// Importing the loadPlanetsData from planets.model module
const { loadPlanetsData } = require('./models/planets.model.js');

// Setting up the port number
const PORT = process.env.PORT || 8000; // This will check if there is default environment port and if not then -->> 8000

// Creating a server from http module
// We know that http module needs a (req and res) parameter and a callback function, but all of them are under the express server called app that we pass as parameters
// We are basically adding the express on top of http server
const server = http.createServer(app);

// creating a function to start the server 
async function startServer() {
    
    // we will wait untill the promise of reading data from loadPlanetData function is completed and then move further
    await loadPlanetsData();

    // Listining the server
    server.listen(PORT, () => {
        console.log(`Listining to server at port ${PORT}...`);
    });
}

// Starting the server 
startServer();