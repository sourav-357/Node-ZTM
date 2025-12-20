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
// Only runs if DB is empty - prevents duplicate entries on restarts
async function loadPlanetsData() {
    return new Promise(async (resolve, reject) => {
        // Quick check to avoid re-processing if data already exists
        const existingPlanets = await Planet.find({});
        if (existingPlanets.length > 0) {
            console.log(`Found ${existingPlanets.length} planets already in database. Skipping CSV load.`);
            return resolve();
        }

        // Using streams for memory efficiency with large CSV files
        fs.createReadStream(path.join(__dirname, '..', '..', 'data', 'kepler_data.csv'))
            .pipe(parse({
                comment: '#',   // Ignore comment lines
                columns: true,  // First row as headers
            }))
            .on('data', async (data) => {
                results.push(data);
                
                // Only save planets that meet habitable criteria
                if (isHabitablePlanet(data)) {
                    // Upsert prevents duplicates - useful if function runs multiple times
                    await Planet.updateOne(
                        { keplerName: data.kepler_koi_name },
                        { keplerName: data.kepler_koi_name },
                        { upsert: true }
                    );
                }
            })
            .on('error', (err) => {
                console.error('Error reading CSV file:', err);
                reject(err);
            })
            .on('end', async () => {
                const countPlanetsFound = (await Planet.find({})).length;
                console.log(`Loaded ${countPlanetsFound} habitable planets into database.`);
                resolve();
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

