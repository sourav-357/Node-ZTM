
// ------------------------------------------- Creating our own Server --------------------------------------------//

// importing the http module
const http = require('http');

// setting up the port to 3000
const PORT = 3000;

// Creating our new server with the name 'server'
const server = http.createServer((req, res) => {

    // if the requested url matches '/friends'
    if (req.url === '/friends') {

        // we need to write down the status code 
        res.statusCode = 200;
        // we need to write down the setHeader to tell which type of content is there 
        res.setHeader('Content-Type', 'application/json');

        // Compulsory to write the res.end() as it will execute the response to the request 
        res.end(JSON.stringify({ // JSON.stringify willl convert the method to string
            roll: 2409146,
            name: 'Sourav Kumar',
            nickname: 'CutuRiyaa',
            semester: '2nd Semester student',
            branch: 'Computer science and engineering',
        }));

    // if the requested url is '/messages' then it will respond like this
    } else if (req.url === '/messages') {

        // setting up the statusCode
        res.statusCode = 200;
        // setting up the getHeader to tell which type of content
        res.getHeader('Content-Type', 'text/html');

        // res.write() will write down the content that will be displayed when the res.end() gets called
        res.write('<html>');
        res.write('<body>');
        res.write('<ul>');
        res.write('<li>Hello Dear Issac Newton, How are you?');
        res.write('<li>How have you been from so long?');
        res.write('<li>What are your thoughts on Astronomy?');
        res.write('</ul>');
        res.write('</body>');
        res.write('</html>');

        // compulsory part to actually implement the respond to the request 
        res.end();

    // if the requested url do not matches any of the above 
    } else {
        res.statusCode = 404;
        res.end();
    }
})

// start the server now at port 3000 that we created earlier
server.listen(PORT, () => {
    console.log(`Listining to port ${PORT}`)
});

