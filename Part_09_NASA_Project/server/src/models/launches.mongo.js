
// Importing the mongoose 
const mongoose = require('mongoose');

// stroring the schema 
const launchesSchema = new mongoose.Schema({
    flightNumber: {
        type: Number,
        required: true,
    },
    LaunchDate: Date,
    
})