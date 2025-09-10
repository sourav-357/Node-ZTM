
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

    // If the data provided by the user is wrong 
    if (!launch.mission || !launch.rocket || !launch.launchDate || !launch.target) {
        return res.status(400).json({
            error: 'Missing required launch property'
        });
    }

    launch.launchDate = new Date(launch.launchDate);
    
    // Checking if the value of date is a number or not 
    if (isNaN(launch.launchDate)) {
        return res.status(400).json({
            error: 'Invalid launch Date',
        });
    }

    addNewLaunch(launch);
    return res.status(201).json(launch);
}

// Exporting the data as module
module.exports = {
    httpGetAllLaunches,
    httpAddNewLaunch,
}

