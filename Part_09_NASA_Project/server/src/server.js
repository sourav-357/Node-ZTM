
// Importing the http module
const http = require('http');

// Setting up the port number
const PORT = process.env.PORT || 8000; // This will check if there is default environment port and if not then -->> 8000

// Creating a server from http module
const server = http.createServer( /*Some parameters*/ );

// Starting the server 
server.listen(PORT, () => {
    console.log(`Listining to server at port ${PORT}...`);
});