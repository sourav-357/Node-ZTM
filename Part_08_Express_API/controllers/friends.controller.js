
// Importing the data of friends from different module
const friends = require('../models/friends.model');

// Creating a function for the new friends by post method
function postFriend(req, res) {

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
}



// Creating another function for getting all the friends 
function getFriends(req, res) {

    // Directly passing the work that it will do without even telling the res.setHeader('text/html') function
    // Without even passing the stringify object or res.end() function
    res.send(friends);

    // We could also use JSON instead of the send part so that our message is for sure treated as the java script object
    res.json(friends);

    // we could also pass on the status code by 
    res.status(200).json(friends);
}



// Function to get the data of a indivisual friend from the array 
function getFriend(req, res) {

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
}


// exporting these three functions
module.exports = {
    getFriend,
    getFriends,
    postFriend,
};