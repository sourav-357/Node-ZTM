const { 
    getAllLaunches,
    addNewLaunch,
    existsLaunchWithId,
    abortLaunchById,
} = require('../../models/launches.model');

// GET /launches - Returns all launches (upcoming and past)
async function httpGetAllLaunches(req, res) {
    const launches = await getAllLaunches();
    return res.status(200).json(launches);
}

// POST /launches - Creates a new launch
// Validates input and auto-assigns flight number
async function httpAddNewLaunch(req, res) {
    const launch = req.body;

    // Input validation - check for required fields
    if (!launch.mission || !launch.rocket || !launch.launchDate || !launch.target) {
        return res.status(400).json({
            error: 'Missing required launch property'
        });
    }

    // Convert date string to Date object for MongoDB
    launch.launchDate = new Date(launch.launchDate);
    
    // Validate date is actually valid
    if (isNaN(launch.launchDate)) {
        return res.status(400).json({
            error: 'Invalid launch date',
        });
    }

    try {
        const savedLaunch = await addNewLaunch(launch);
        return res.status(201).json(savedLaunch);
    } catch (error) {
        console.error('Error adding launch:', error);
        return res.status(500).json({
            error: 'Failed to add launch'
        });
    }
}

// DELETE /launches/:id - Aborts a launch by flight number
async function httpAbortLaunch(req, res) {
    const launchId = Number(req.params.id);

    // Check if launch exists before attempting to abort
    const existsLaunch = await existsLaunchWithId(launchId);
    if (!existsLaunch) {
        return res.status(404).json({
            error: 'Launch not found',
        }); 
    }

    const aborted = await abortLaunchById(launchId);
    if (!aborted) {
        return res.status(400).json({
            error: 'Launch not aborted'
        });
    }

    return res.status(200).json({
        ok: true
    });
}

module.exports = {
    httpGetAllLaunches,
    httpAddNewLaunch,
    httpAbortLaunch,
}

