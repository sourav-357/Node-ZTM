// Import csv-parse to help read CSV files
const { parse } = require('csv-parse');

// Importing the path module so that it gets the absolute path 
const path = require('path');

// Import file system (fs) to read files
const fs = require('fs');

// Store all planets data here
const results = [];

// Store only life-supporting planets here
const habitablePlanets = [];

// Check if a planet can support life
function isHabitablePlanet(planet) {
  return planet['koi_disposition'] === 'CONFIRMED'
    && planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11
    && planet['koi_prad'] < 1.6;
}

// Load planets data from CSV file
function loadPlanetsData() {

    // Use Promise so we know when reading is done
    return new Promise((resolve, reject) => {

        // Open the kepler_data.csv file
        fs.createReadStream(path.join(__dirname, '..', '..', 'data', 'kepler_data.csv'))
            // Send data to csv parser
            .pipe(parse({
                comment: '#',   // Skip lines starting with #
                columns: true,  // Use first row as column names
            }))
            // Runs when one row of data comes
            .on('data', (data) => {
                results.push(data);
                
                // Add to habitable list if planet is good for life
                if (isHabitablePlanet(data)) {
                    habitablePlanets.push(data);
                }
            })
            // Runs if there is an error
            .on('error', (err) => {
                console.log(err);
                reject(err); // Stop if error happens
            })
            // Runs after reading is complete
            .on('end', () => {
                console.log(`Total habitable planets: ${habitablePlanets.length}`);
                resolve(); // Finish promise
            });
    });
}

// Export function and data so other files can use them
module.exports = {
    loadPlanetsData,
    planets: habitablePlanets,
}
