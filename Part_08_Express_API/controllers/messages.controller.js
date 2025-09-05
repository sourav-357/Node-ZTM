
// Function to show the message when the url is what we want 
function getMessages(req, res) {
    // responding to the requested get url by res.send() function
    res.send('<ul><li>Helooooo Riyanshu....</li></ul>');
}

// Function where we will post any message 
function postMessage(req, res) {
    console.log(`Updating messages...`);
}

// Exporting the both functions 
module.exports = {
    getMessages,
    postMessage
}
