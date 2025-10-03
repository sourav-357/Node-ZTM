// We are using Express (a web framework for Node.js)
const express = require('express');
const app = express();

// This function just wastes time (4 sec) and blocks the server
// While this runs, the server cannot handle other requests
function delay(duration) {
    const startTime = Date.now();
    while (Date.now() - startTime < duration) {
        // Waiting in a loop (bad for performance)
    }
}

// If someone visits http://localhost:3000/
// This will reply quickly with the process ID
app.get('/', (req, res) => {
    res.send(`Performance example: ${process.pid}`);
});

// If someone visits http://localhost:3000/timer
// This will make the server "wait" 4 seconds before replying
app.get('/timer', (req, res) => {
    delay(4000); // wait 4 seconds
    res.send(`Beep beep beep! ${process.pid}`);
});

// Just printing messages in terminal
console.log('Running server.js...');
console.log('Worker process started.');

// Start server at port 3000
app.listen(3000);