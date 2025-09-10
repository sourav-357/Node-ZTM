
// Importing the data from launches.model so that we could access it 
const { 
    getAllLaunches,
    addNewLaunch,
} = require('../../models/launches.model');

// Creating the getAllLaunches function so that we could access all the launches data 
function httpGetAllLaunches(req, res) {

    // Geeting the data from launches by launches.values() and converting it to array by Array.from() and treating it as json 
    return res.status(200).json(getAllLaunches());
}

// Creating a function to add new Launch function
function httpAddNewLaunch(req, res) {
    const launch = req.body;

    launch.launchDate = new Date(launch.launchDate);

    addNewLaunch(launch);
    return res.status(201).json(launch);
}

// Exporting the data as module
module.exports = {
    httpGetAllLaunches,
    httpAddNewLaunch,
}

