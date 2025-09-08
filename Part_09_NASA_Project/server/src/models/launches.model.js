
// we could store the data of the satelites in many ways -->> but we will use the map data structure as it is very good 
const launches = new Map();

// creating a object of lauch 
const launch = {
    filghtNumber: 100,
    mission: 'kepler exploration x',
    rocket: 'Explorer IS1',
    launchDate: new Date('December 27, 2030'),
    destination: 'kepler-442 b',
    cutomer: ['ZTM', 'NASA'],
    upcoming: true,
    success: true,
};

// we will now map the flightNumber and that particular launch object together so that by calling launch.get(filghtNumber) -->> 
// we can get all data of the satelite
launches.set(launch.filghtNumber, launch);

// exporting the module data now so that it could be used elsewhere
module.exports = {
    launches,
};

