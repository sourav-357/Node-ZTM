
// we could store the data of the satelites in many ways -->> but we will use the map data structure as it is very good 
const launches = new Map();

// Storing the latest Flight Number 
let latestFlighNumber = 100;

// creating a object of lauch 
const launch = {
    filghtNumber: 100,
    mission: 'kepler exploration x',
    rocket: 'Explorer IS1',
    launchDate: new Date('December 27, 2030'),
    target: 'kepler-442 b',
    customer: ['ZTM', 'NASA'],
    upcoming: true,
    success: true,
};

// we will now map the flightNumber and that particular launch object together so that by calling launch.get(filghtNumber) -->> 
// we can get all data of the satelite
launches.set(launch.filghtNumber, launch);

//if there exist a launch with that launch Id 
function existsLaunchWithId(launchId) {
    return launches.has(launchId)
}

// Function to get all launches 
function getAllLaunches() {
    return Array.from(launches.values());
}

// Creating a function to add new launch 
function addNewLaunch(launch) {
    latestFlighNumber++;
    launches.set(
        latestFlighNumber, 
        Object.assign(launch, {
            filghtNumber: latestFlighNumber,
            customer: ['Zero to Mastery', 'NASA'],
            upcoming: true,
            success: true,
        })
    )
}

// Function to abort any particular function
function abortLaunchById(launchId) {
    
}

// exporting the module data now so that it could be used elsewhere
module.exports = {
    getAllLaunches,
    addNewLaunch,
    existsLaunchWithId,
    abortLaunchById,
};

