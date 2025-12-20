// Import the getAllPlanets function from the planets model
// This function fetches planets from the MongoDB database
const { getAllPlanets } = require('../../models/planets.model');

// Controller function to handle GET requests for all planets
// This is called when someone visits /planets endpoint
async function httpGetAllPlanets(req, res) {
    try {
        // Get all planets from the database
        // This is now an async operation since we're querying MongoDB
        const planets = await getAllPlanets();
        
        // Send back a successful response (200 OK) with the planets data in JSON format
        return res.status(200).json(planets);
    } catch (error) {
        // If something goes wrong (database error, etc.), send an error response
        console.error('Error fetching planets:', error);
        return res.status(500).json({
            error: 'Failed to fetch planets'
        });
    }
}

// Export the function so it can be used in the router
module.exports = {
    httpGetAllPlanets,
}

