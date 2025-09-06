
// All the functions of planets that will be required by the planet.router when called by the app.js 

// Importing the planets data from planets.model module
const planets = require('../../models/planets.model.js');

// Creating a function of getting all planets
function getAllPlanets(req, res) {
    return res.status(200).json(planets);
}