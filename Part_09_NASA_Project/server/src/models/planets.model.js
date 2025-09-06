
// This file will control all the informations about the planets that will be used by planet.controller which will be called by planet.router when requested by app.js


// Importing the csv-parse package that we just installed
const { parse } = require('csv-parse');

// Importing the file system package that is inbuilt in the node
const fs = require('fs');

// Creating an array for the data
const results = [];

// Creating a new array that will store only those planets that have the capability of life
const habitablePlanets = [];

// Creating a new function to check if the planet is habitable or not 
function isHabitablePlanet(planet) {
  return planet['koi_disposition'] === 'CONFIRMED'
    && planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11
    && planet['koi_prad'] < 1.6;
}

// Creating a function to load planets data 
function loadPlanetsData() {

    // Creating a new promise so that the process moves ahead when the data is read completely
    return new Promise((resolve, reject) => {

        // creating a readstream for the data of the kepler_data.csv file
        fs.createReadStream('./kepler_data.csv')
            // parsing the data recieved from kepler file then proceeding it further to data event
            .pipe(parse({
                comment: '#',
                columns: true,
            }))
            // creating the first event if data is recieved
            .on('data', (data) => {
                results.push(data);
                
                // check if the planet is habitable or not 
                if (isHabitablePlanet(data)) {
                    habitablePlanets.push(data);
                }
            })
            // creating another event if any type of error comes
            .on('error', (err) => {
                console.log(err);

                // we need to reject the promise when error comes 
                reject(err);
            })
            // creating another event if the file is completed
            .on('end', () => {
                // Printing the number of habitable planets 
                console.log(`The number of habitable planets are: ${habitablePlanets.length}`);
                
                // resolving the promise to move further
                resolve();
            });
    });
}


// Exporting the module data now so that it could be used by the planet.controller
module.exports = {
    loadPlanetsData,
    planets: habitablePlanets,
}

