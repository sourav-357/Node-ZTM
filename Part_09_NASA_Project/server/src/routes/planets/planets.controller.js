
// All the functions of planets that will be required by the planet.router when called by the app.js 

// Creating data for the planets
const planets = [];

// Creating a function of getting all planets
function getAllPlanets(req, res) {
    return res.status(200).json(planets);
}