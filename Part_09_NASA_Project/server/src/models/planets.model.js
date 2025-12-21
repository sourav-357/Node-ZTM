const { parse } = require('csv-parse');
const path = require('path');
const fs = require('fs');
const Planet = require('./planets.mongo');

// Temporary storage for CSV parsing - not needed after DB save
const results = [];

// Filtering habitable planets based on scientific criteria
// Using conservative thresholds to ensure we only get planets that could actually support life
// koi_insol = stellar flux (how much energy the planet receives)
// koi_prad = planetary radius (size compared to Earth)
function isHabitablePlanet(planet) {
  return planet['koi_disposition'] === 'CONFIRMED'
    && planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11
    && planet['koi_prad'] < 1.6;
}

// Loads planets from CSV on server startup
// Reloads all habitable planets on every server start
async function loadPlanetsData() {
    return new Promise(async (resolve, reject) => {
        const habitablePlanets = [];

        // Using streams for memory efficiency with large CSV files
        fs.createReadStream(path.join(__dirname, '..', '..', 'data', 'kepler_data.csv'))
            .pipe(parse({
                comment: '#',   // Ignore comment lines
                columns: true,  // First row as headers
            }))
            .on('data', (data) => {
                results.push(data);
                
                // Collect planets that meet habitable criteria
                if (isHabitablePlanet(data)) {
                    // Use kepler_name (more readable) or fall back to kepoi_name if kepler_name is empty
                    const planetName = data.kepler_name || data.kepoi_name;
                    if (planetName) {
                        habitablePlanets.push(planetName);
                    }
                }
            })
            .on('error', (err) => {
                console.error('Error reading CSV file:', err);
                reject(err);
            })
            .on('end', async () => {
                try {
                    // Clear existing planets before loading new ones
                    await Planet.deleteMany({});
                    
                    // Save all habitable planets to database
                    const planetsToSave = habitablePlanets.map(planetName => ({
                        keplerName: planetName
                    }));
                    
                    if (planetsToSave.length > 0) {
                        await Planet.insertMany(planetsToSave);
                    }
                    
                    const countPlanetsFound = (await Planet.find({})).length;
                    console.log(`Loaded ${countPlanetsFound} habitable planets into database.`);
                    resolve();
                } catch (error) {
                    console.error('Error saving planets to database:', error);
                    reject(error);
                }
            });
    });
}

// Fetch all planets from DB - used by the /planets endpoint
// Excluding MongoDB internal fields to keep API response clean
async function getAllPlanets() {
    return await Planet.find({}, {
        '_id': 0,
        '__v': 0,
    });
}

module.exports = {
    loadPlanetsData,
    getAllPlanets,
}

