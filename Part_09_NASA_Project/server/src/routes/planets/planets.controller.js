// Import (load) the planets data from the planets.model file
const { planets } = require('../../models/planets.model');

// Define a function to handle requests for "all planets"
function getAllPlanets(req, res) {
    // Send back a response with status 200 (OK) 
    // and return the planets data in JSON format
    return res.status(200).json(planets);
}

// Export the function so it can be used in other files (like routes)
module.exports = {
    getAllPlanets,
}

