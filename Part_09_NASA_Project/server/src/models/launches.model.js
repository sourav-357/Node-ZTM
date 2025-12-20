const Launch = require('./launches.mongo');
const Planet = require('./planets.mongo');

// Default customers for all new launches
const DEFAULT_CUSTOMERS = ['Zero to Mastery', 'NASA'];

// Gets the highest flight number to auto-increment for new launches
// Starting from 100 to leave room for historical SpaceX data
async function getLatestFlightNumber() {
    const latestLaunch = await Launch
        .findOne()
        .sort('-flightNumber');
    
    // If DB is empty, start numbering from 100
    if (!latestLaunch) {
        return 100;
    }
    return latestLaunch.flightNumber;
}

// Check if launch exists - used for validation before aborting
async function existsLaunchWithId(launchId) {
    return await Launch.findOne({
        flightNumber: launchId
    });
}

// Fetch all launches with optional pagination support
// Currently not using pagination but structure is ready for it
async function getAllLaunches(skip, limit) {
    return await Launch
        .find({}, { '_id': 0, '__v': 0 })
        .sort({ flightNumber: 1 })
        .skip(skip)
        .limit(limit);
}

// Helper function to save/update launch in DB
// Using upsert to handle both new launches and updates
async function saveLaunch(launch) {
    await Launch.findOneAndUpdate(
        { flightNumber: launch.flightNumber },
        launch,
        { upsert: true }
    );
}

// Creates a new launch with auto-incremented flight number
// Sets default values for customers, upcoming, and success status
async function addNewLaunch(launch) {
    const newFlightNumber = await getLatestFlightNumber() + 1;
    
    const newLaunch = Object.assign(launch, {
        flightNumber: newFlightNumber,
        customers: DEFAULT_CUSTOMERS,
        upcoming: true,
        success: true,
    });
    
    await saveLaunch(newLaunch);
    return newLaunch;
}

// Aborts a launch by marking it as not upcoming and unsuccessful
// Returns boolean indicating if the operation succeeded
async function abortLaunchById(launchId) {
    const aborted = await Launch.updateOne(
        { flightNumber: launchId },
        {
            upcoming: false,
            success: false,
        }
    );
    
    // modifiedCount tells us if a document was actually updated
    return aborted.modifiedCount === 1;
}

// Export all functions so other files can use them
module.exports = {
    getAllLaunches,
    addNewLaunch,
    existsLaunchWithId,
    abortLaunchById,
};

