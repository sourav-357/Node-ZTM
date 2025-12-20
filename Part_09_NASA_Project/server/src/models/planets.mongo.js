// Import mongoose library to interact with MongoDB database
const mongoose = require('mongoose');

// Define the schema (structure) for planets in our database
// This tells MongoDB what fields each planet document should have
const planetSchema = new mongoose.Schema({
    // The name of the Kepler exoplanet (e.g., "Kepler-442 b")
    keplerName: {
        type: String,
        required: true, // This field must be provided when creating a planet
    },
});

// Create a model called "Planet" based on the schema
// This model will be used to interact with the "planets" collection in MongoDB
// Mongoose automatically pluralizes the model name, so "Planet" becomes "planets" collection
const Planet = mongoose.model('Planet', planetSchema);

// Export the Planet model so other files can use it
module.exports = Planet;