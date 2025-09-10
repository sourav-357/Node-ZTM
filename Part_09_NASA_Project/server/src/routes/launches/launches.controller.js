
// Importing the data from launches.model so that we could access it 
const { getAllLaunches } = require('../../models/launches.model');

// Creating the getAllLaunches function so that we could access all the launches data 
function httpGetAllLaunches(req, res) {

    // Geeting the data from launches by launches.values() and converting it to array by Array.from() and treating it as json 
    return res.status(200).json(getAllLaunches());
}

// Exporting the data as module
module.exports = {
    httpGetAllLaunches,
}

