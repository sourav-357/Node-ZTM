// Import React hooks for managing component state
import {
  useState,
} from "react";

// Import routing components from react-router-dom
// Switch renders the first Route that matches the current URL
// Route defines which component to render for a specific URL path
import {
  Switch,
  Route,
} from "react-router-dom";

// Import Arwes UI components for sci-fi styling
import {
  Frame,
  withSounds,
  withStyles,
} from "arwes";

// Import custom hooks that fetch data from the API
import usePlanets from "../hooks/usePlanets";
import useLaunches from "../hooks/useLaunches";

// Import reusable UI components
import Centered from "../components/Centered";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Import page components
import Launch from "./Launch";
import History from "./History";
import Upcoming from "./Upcoming";

// Define CSS styles using a function (required by Arwes withStyles)
const styles = () => ({
  content: {
    display: "flex",
    flexDirection: "column",
    height: "100vh", // Full viewport height
    margin: "auto",
  },
  centered: {
    flex: 1, // Takes up remaining space
    paddingTop: "20px",
    paddingBottom: "10px",
  },
});

// Main layout component that wraps all pages
// This component manages the overall structure: header, content area, footer
const AppLayout = props => {
  const { sounds, classes } = props;

  // State to control frame visibility for animation effect
  // When user navigates, we hide and show the frame for a smooth transition
  const [frameVisible, setFrameVisible] = useState(true);
  
  // Function to animate the frame when navigation occurs
  // Hides the frame, waits 600ms, then shows it again
  const animateFrame = () => {
    setFrameVisible(false);
    setTimeout(() => {
      setFrameVisible(true);
    }, 600);
  };

  // Sound effect functions
  // These play different sounds based on user actions
  const onSuccessSound = () => sounds.success && sounds.success.play();
  const onAbortSound = () => sounds.abort && sounds.abort.play();
  const onFailureSound = () => sounds.warning && sounds.warning.play();

  // Custom hook to manage launches data and operations
  // This hook fetches launches from the API and provides functions to add/abort launches
  const {
    launches,
    isPendingLaunch,
    submitLaunch,
    abortLaunch,
  } = useLaunches(onSuccessSound, onAbortSound, onFailureSound);

  // Custom hook to fetch planets data from the API
  // This hook automatically loads planets when the component mounts
  const planets = usePlanets();
  
  return (
    <div className={classes.content}>
      {/* Header component with navigation links */}
      <Header onNav={animateFrame} />
      
      {/* Centered content area */}
      <Centered className={classes.centered}>
        {/* Frame component provides the sci-fi border effect around content */}
        <Frame animate 
          show={frameVisible} 
          corners={4} 
          style={{visibility: frameVisible ? "visible" : "hidden"}}>
          {/* Frame uses render prop pattern - passes animation state */}
          {anim => (
            <div style={{padding: "20px"}}>
              {/* Switch renders the first matching Route */}
              <Switch>
                {/* Route for home page and launch page - shows the launch form */}
                <Route exact path="/">
                  <Launch 
                    entered={anim.entered}
                    planets={planets}
                    submitLaunch={submitLaunch}
                    isPendingLaunch={isPendingLaunch} />
                </Route>
                <Route exact path="/launch">
                  <Launch
                    entered={anim.entered}
                    planets={planets}
                    submitLaunch={submitLaunch}
                    isPendingLaunch={isPendingLaunch} />
                </Route>
                
                {/* Route for upcoming launches page - shows all scheduled launches */}
                <Route exact path="/upcoming">
                  <Upcoming
                    entered={anim.entered}
                    launches={launches}
                    abortLaunch={abortLaunch} />
                </Route>
                
                {/* Route for history page - shows all past launches */}
                <Route exact path="/history">
                  <History entered={anim.entered} launches={launches} />
                </Route>
              </Switch>
            </div>
          )}
        </Frame>
      </Centered>
      
      {/* Footer component */}
      <Footer />
    </div>
  );
};

// Export component wrapped with Arwes HOCs (Higher Order Components)
// withSounds() provides sound effects to the component
// withStyles() provides CSS-in-JS styling
export default withSounds()(withStyles(styles)(AppLayout));

