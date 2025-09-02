// Importing the http module from external 
const http = require('http');

// creating a http request by http.request() and storing it in a variable
let req = http.request('http://www.google.com', (res) => { // http.request takes the requested url and a respond callback function
    res.on('data', (chunk) => { // res.on() to start responding and the first parameter is data -->> if we recieve data then we need to do this thing (that is inside the callback function)
        console.log(`Data chunk: ${chunk}`); // here the callback function is simply printing out the data that we recieved
    });
    res.on('end', () => { // res.on() to start responding if the parameter is end(that means no more data) -->> if we recieve no more data then we need to run the callback function
        console.log('No more data'); // callback function simply prints "no more data"
    });
});

// we need to execute the http request by ending that request
req.end();
