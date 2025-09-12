
// importing the express module that we installed 
const express = require('express');

// Creating a first server with express
const app = express();

// Creating a function to delay the response 
function delay (duration) {
    const stratTime = Date.now();
    while (Date.now() - stratTime < duration) {
        // untill this loop is ongoing, the event loop is blocked...
    }
}

// Routing the app server 
app.get('/', (req, res) => {
    res.send('performance example');
});

// Routing the app server for /timer
app.get('/timer', (req, res) => {
    
    // Delaying the response and then replying 
    delay(9000);

    // Replying to the request now 
    res.send('Ding Ding Ding! ...');
});

// Starting the server at port 3000 
app.listen(3000, () => {
    console.log('The server is listining to requests at port 3000....');
})