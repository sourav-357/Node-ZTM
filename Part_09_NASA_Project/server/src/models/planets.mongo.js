
// Requiring the mongoose 
const mongoose = require('mongoose');

// Storing the data of planets modal 
const planetSchema = mongoose.Schema({
    keplerName: {
        type: String,
        require: true,
    },
});