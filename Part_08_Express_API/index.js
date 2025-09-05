
// importing the express module that we installed
const express = require('express');

// setting up the new server
const app = express();

// Setting up the port number -->> 3000
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Listining to server at port ${PORT}...`)
});