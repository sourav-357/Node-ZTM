
// Importing the csv-parse package that we just installed
const { parse } = require('csv-parse');

// Importing the file system package that is inbuilt in the node
const fs = require('fs');

//Creating an array for the data
const results = [];

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
    })
    // creating another event if any type of error comes
    .on('error', (err) => {
        console.log(err);
    })
    // creating another event if the file is completed
    .on('end', () => {
        console.log(results);
        console.log('Done processing the file');
    });

