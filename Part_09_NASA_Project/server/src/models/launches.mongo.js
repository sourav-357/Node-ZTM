// Import mongoose library to interact with MongoDB database
const mongoose = require('mongoose');

// Define the schema (structure) for launches in our database
// This tells MongoDB what fields each launch document should have
const launchesSchema = new mongoose.Schema({
    // Unique flight number for each mission (e.g., 100, 101, 102...)
    flightNumber: {
        type: Number,
        required: true, // This field must be provided
    },
    // The date when the launch is scheduled or occurred
    launchDate: {
        type: Date,
        required: true,
    },
    // The name of the mission (e.g., "Kepler Exploration X")
    mission: {
        type: String,
        required: true,
    },
    // The type of rocket being used (e.g., "Explorer IS1", "Falcon 9")
    rocket: {
        type: String,
        required: true,
    },
    // The destination planet (must be a habitable planet from our database)
    target: {
        type: String,
        required: true,
    },
    // Array of customer names who are paying for this launch
    // Default customers are "Zero to Mastery" and "NASA"
    customers: [String],
    // Whether this launch is upcoming (true) or has already happened (false)
    upcoming: {
        type: Boolean,
        required: true,
        default: true, // New launches are upcoming by default
    },
    // Whether the launch was successful (true) or failed (false)
    success: {
        type: Boolean,
        required: true,
        default: true, // New launches are assumed successful until aborted
    },
});

// Create a model called "Launch" based on the schema
// This model will be used to interact with the "launches" collection in MongoDB
const Launch = mongoose.model('Launch', launchesSchema);

// Export the Launch model so other files can use it
module.exports = Launch;