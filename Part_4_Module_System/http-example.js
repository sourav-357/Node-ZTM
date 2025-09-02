// Importing the http module from external 

const http = require('https');

// creating a http request by http.request() and storing it in a variable
let req = http.request('https://www.google.com', (res) => { // http.request takes the requested url and a respond callback function
    res.on('data', (chunk) => { // res.on() to start responding and the first parameter is data -->> if we recieve data then we need to do this thing (that is inside the callback function)
        console.log(`Data chunk: ${chunk}`); // here the callback function is simply printing out the data that we recieved
    });
    res.on('end', () => { // res.on() to start responding if the parameter is end(that means no more data) -->> if we recieve no more data then we need to run the callback function
        console.log('No more data'); // callback function simply prints "no more data"
    });
});

// we need to execute the http request by ending that request
// req.end();



//------------------------------------------------------------------------------------------------------------------//



// again we are going to execute the same program but this time not importing the entire http module but a part of it 

// here we are destructuring the http module and only importing the get function from there
const { get } = require('https');

get('https://www.google.com', (res) => { 
    res.on('data', (chunk) => { 
        // console.log(`Data chunk: ${chunk}`);
    });
    res.on('end', () => { 
        // console.log('No more data'); 
    });
});



// -----------------------------------------------------------------------------------------------------------------//



// Importing and using the custom made module 
const expression = require('./maths');

// using the first function
console.log('Addition of two numbers is: ')
console.log(expression.add(2, 3));

// using the second custom made module
console.log('Difference of two numbers is: ')
console.log(expression.sub(5, 3));



//------------------------------------------------------------------------------------------------------------------//



