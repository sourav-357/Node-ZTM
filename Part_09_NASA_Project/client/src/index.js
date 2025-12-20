// Import React library - the core library for building user interfaces
// React allows us to create reusable components and manage UI state
import React from "react";

// Import ReactDOM - the library that renders React components to the DOM
// ReactDOM is the bridge between React components and the actual HTML page
import ReactDOM from "react-dom";

// Import the main App component
// This is the root component that contains all other components
// It's like the "heart" of our application
import App from "./App";

// Render the App component into the HTML page
// ReactDOM.render takes two arguments:
// 1. The component to render (App)
// 2. The DOM element where it should be rendered (the element with id="root")
// This is the entry point of our React application
ReactDOM.render(
  <App />,
  document.getElementById("root")
);

