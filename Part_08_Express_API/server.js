/*
// If our server is called server.js then our server is started by only typing the npm start without changing anything at package.json file

// importing the express module that we installed
const express = require('express');

// setting up the new server
const app = express();

// Setting up the port number -->> 3000
const PORT = 3000;

// Creating a friends array tat will store all the information about the friends 
const friends = [
    {
        roll: '1',
        name: 'Sourav Kumar',
        semester: '2nd Semester',
        branch: 'Computer Science and Engineering',
    },
    {
        roll: '2',
        name: 'Shivam Kumar',
        semester: '2nd Semester',
        branch: 'Mechanical Engineering',
    },
    {
        roll: '3',
        name: 'Asish Kumar',
        semester: '2nd Semester',
        branch: 'Electronics Engineering',
    },
    {
        roll: '4',
        name: 'Akash Kumar',
        semester: '2nd Semester',
        branch: 'Computer Science and Engineering',
    }
];

// We are going to use another function of Express that will help us to play with data of reqest and respond
// We can (after editing the data's of these parameters) use next() to proceed further 
// This function app.use() have a function that takes three parameters (req, res, next) so that we can move to next 
app.use((req, res, next) => {

    // Declaring a variable to store the current time 
    const start = Date.now();

    // Moving on to the next function -->> app.get() functions and then it will return here and execute the rest part
    // next() will first see if there is any other use() functions -->> if yes then it will move on to that one first
    // If there is none then it will move further to get()
    next();

    // Calculating the time taken for the get() functions 
    const timeTaken = Date.now() - start;

    // Playing with the req and res data whatever we like 
    console.log(`The requested method is ${req.method} type and the url is ${req.url} and time taken is ${timeTaken}ms`);
});

// this express.json() function helps to understand the JSON contents when user hit a post request of JSON type
app.use(express.json());

// app.post() request to pass on the data and put it under the friends section
app.post('/friends', (req, res) => {

    // if the post request do not have the data we want
    if (!req.body.name && req.body.semester && req.body.branch) {
        return res.status(400).json({
            error: `The required data cannot be empty`
        });
    };

    // Creating a new friend as per the user data
    const newFriend = {

        roll: friends.length + 1,
        name: req.body.name, // req.body.name -->> requested_url.content(body).name(parameter that we want from the json)
        semester: req.body.semester,
        branch: req.body.branch,
    };

    // adding the new friend to friend array
    friends.push(newFriend);

    // printing the entire friends array
    res.json(friends);
});

// Routing the Express Server to any particular url
app.get('/friends', (req, res) => {

    // Directly passing the work that it will do without even telling the res.setHeader('text/html') function
    // Without even passing the stringify object or res.end() function
    res.send(friends);

    // We could also use JSON instead of the send part so that our message is for sure treated as the java script object
    res.json(friends);

    // we could also pass on the status code by 
    res.status(200).json(friends);
});

// Now parsing the url for a particular friend roll number 
app.get('/friends/:friendIds', (req, res) => {

    // This will parse the value after '/friends/:' and will store it in friendsId and we are converting it into number
    const friendId = Number(req.params.friendIds);

    // Checking and storing if any friend exist with the entered friendId or not  
    const friend = friends[friendId];
    
    // Responding as per the user data 
    if (friend) {
        res.status(200).json(friend);

    // if the friend do not exist with the friendId 
    } else {
        res.status(404).json({ // here we could return any value so here we just created a object and responded
            error: 'The Requested friend do not exist .... '
        })
    }
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
*/





// -------------------------------------------- MODEL VIEW CONTROLLER -------------------------------------------------//





// If our server is called server.js then our server is started by only typing the npm start without changing anything at package.json file

// importing the express module that we installed
const express = require('express');

// Importing the functions from other module for messages and friends
const friendsController = require('./controllers/friends.controller');
const messageController = require('./controllers/messages.controller');

// setting up the new server
const app = express();

// Setting up the port number -->> 3000
const PORT = 3000;

// Creating a friends array tat will store all the information about the friends 
const friends = [
    {
        roll: '1',
        name: 'Sourav Kumar',
        semester: '2nd Semester',
        branch: 'Computer Science and Engineering',
    },
    {
        roll: '2',
        name: 'Shivam Kumar',
        semester: '2nd Semester',
        branch: 'Mechanical Engineering',
    },
    {
        roll: '3',
        name: 'Asish Kumar',
        semester: '2nd Semester',
        branch: 'Electronics Engineering',
    },
    {
        roll: '4',
        name: 'Akash Kumar',
        semester: '2nd Semester',
        branch: 'Computer Science and Engineering',
    }
];

// We are going to use another function of Express that will help us to play with data of reqest and respond
// We can (after editing the data's of these parameters) use next() to proceed further 
// This function app.use() have a function that takes three parameters (req, res, next) so that we can move to next 
app.use((req, res, next) => {

    // Declaring a variable to store the current time 
    const start = Date.now();

    // Moving on to the next function -->> app.get() functions and then it will return here and execute the rest part
    // next() will first see if there is any other use() functions -->> if yes then it will move on to that one first
    // If there is none then it will move further to get()
    next();

    // Calculating the time taken for the get() functions 
    const timeTaken = Date.now() - start;

    // Playing with the req and res data whatever we like 
    console.log(`The requested method is ${req.method} type and the url is ${req.url} and time taken is ${timeTaken}ms`);
});

// this express.json() function helps to understand the JSON contents when user hit a post request of JSON type
app.use(express.json());

// app.post() request to pass on the data and put it under the friends section
app.post('/friends', (req, res) => {

    // if the post request do not have the data we want
    if (!req.body.name && req.body.semester && req.body.branch) {
        return res.status(400).json({
            error: `The required data cannot be empty`
        });
    };

    // Creating a new friend as per the user data
    const newFriend = {

        roll: friends.length + 1,
        name: req.body.name, // req.body.name -->> requested_url.content(body).name(parameter that we want from the json)
        semester: req.body.semester,
        branch: req.body.branch,
    };

    // adding the new friend to friend array
    friends.push(newFriend);

    // printing the entire friends array
    res.json(friends);
});

// Routing the Express Server to any particular url
app.get('/friends', (req, res) => {

    // Directly passing the work that it will do without even telling the res.setHeader('text/html') function
    // Without even passing the stringify object or res.end() function
    res.send(friends);

    // We could also use JSON instead of the send part so that our message is for sure treated as the java script object
    res.json(friends);

    // we could also pass on the status code by 
    res.status(200).json(friends);
});

// Now parsing the url for a particular friend roll number 
app.get('/friends/:friendIds', (req, res) => {

    // This will parse the value after '/friends/:' and will store it in friendsId and we are converting it into number
    const friendId = Number(req.params.friendIds);

    // Checking and storing if any friend exist with the entered friendId or not  
    const friend = friends[friendId];
    
    // Responding as per the user data 
    if (friend) {
        res.status(200).json(friend);

    // if the friend do not exist with the friendId 
    } else {
        res.status(404).json({ // here we could return any value so here we just created a object and responded
            error: 'The Requested friend do not exist .... '
        })
    }
});

// Routing another url in express
app.get('/messages', messageController.getMessages());

// Routing another url in express 
app.post('/messages', messageController.postMessage());

// Starting the port at 3000 by ".listen(port, () => {})" function 
app.listen(PORT, () => {
    console.log(`Listining to server at port ${PORT}...`)
});

