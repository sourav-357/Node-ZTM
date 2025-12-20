// Import BrowserRouter from react-router-dom
// This enables client-side routing (navigation without page reloads)
import {
  BrowserRouter as Router,
} from "react-router-dom";

// Import Arwes UI library components
// Arwes provides a sci-fi/futuristic design system for the UI
import {
  Arwes,
  SoundsProvider,
  ThemeProvider,
  createSounds,
  createTheme,
} from "arwes";

// Import the main layout component
// AppLayout contains the header, footer, and all page routes
import AppLayout from "./pages/AppLayout";

// Import theme, resources, and sounds configuration
// These define the visual style, images, and sound effects for the app
import { theme, resources, sounds } from "./settings";

// Main App component - the root of our React application
// This component sets up the theme, sounds, and routing for the entire app
const App = () => {
  return (
    // ThemeProvider wraps the app and provides theme settings to all child components
    <ThemeProvider theme={createTheme(theme)}>
      {/* SoundsProvider wraps the app and provides sound effects to all child components */}
      <SoundsProvider sounds={createSounds(sounds)}>
        {/* Arwes component provides the sci-fi visual effects and animations */}
        {/* The animate prop enables animations, background sets the space background image */}
        <Arwes animate background={resources.background.large} pattern={resources.pattern}>
          {/* Arwes uses a render prop pattern - it passes animation state to children */}
          {anim => (
            // Router enables client-side routing (navigation between pages)
            <Router>
              {/* AppLayout contains all the pages and navigation */}
              {/* The show prop controls when the layout appears (after animation) */}
              <AppLayout show={anim.entered} />
            </Router>
          )}
        </Arwes>
      </SoundsProvider>
    </ThemeProvider>
  );
};

// Export the App component so it can be imported in index.js
export default App;

