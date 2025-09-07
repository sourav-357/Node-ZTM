// Import React library to help us create UI parts (components)
import React from "react";

// Import ReactDOM to place those UI parts into the actual web page
import ReactDOM from "react-dom";

// Import the main App component which is like the "heart" of our project
import App from "./App";

// Tell ReactDOM to display the App component inside the element
// that has id="root" in index.html (this is where the whole app shows up)
ReactDOM.render(
  <App />,
  document.getElementById("root")
);
