
// If our server is called server.js then our server is started by only typing the npm start without changing anything at package.json file

// importing the express module that we installed
const express = require('express');

// setting up the new server
const app = express();

// Setting up the port number -->> 3000
const PORT = 3000;

// Routing the Express Server to any particular url
app.get('/', (req, res) => {

    // Directly passing the work that it will do without even telling the res.setHeader('text/html') function
    // Without even passing the stringify object or res.end() function
    res.send({
        roll: '2409146',
        name: 'Sourav Kumar',
        semester: '2nd Semester',
        branch: 'Computer Science and Engineering',
    });
});

// Routing another url in express
app.get('/messages', (req, res) => {
    
    // responding to the requested get url by res.send() function
    res.send('<ul><li>Helooooo Riyanshu....</li></ul>');
});

// Routing another url in express 
app.post('/messages', (req, res) => {
    console.log('Updateing messages...');
});

// Starting the port at 3000 by ".listen(port, () => {})" function 
app.listen(PORT, () => {
    console.log(`Listining to server at port ${PORT}...`)
});