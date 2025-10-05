
// Importing the mongoose 
const mongoose = require('mongoose');

// stroring the schema 
const launchesSchema = new mongoose.Schema({
    flightNumber: {
        type: Number,
        required: true,
    },
    LaunchDate: Date,
    missions: {
        type: String,
        required: true,
    },
    rocket: {
        type: String,
        required: true,
    },
    target: {
        type: String,
        required: true,
    },
    customer: [ String ],
    upcoming: {
        type: Boolean,
        require: true,
    },
    success: {
        type: Boolean,
        require: true,
    },
    umcoming: {
        type: Boolean,
        require: true,
        default: true,
    }
});