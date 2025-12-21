// Import useMemo hook from React
// useMemo is used to memoize (cache) computed values to avoid unnecessary recalculations
import { useMemo } from "react";

// Import Arwes UI components for sci-fi styling
import { Appear, Button, Loading, Paragraph } from "arwes";

// Import Clickable component that adds sound effects to clicks
import Clickable from "../components/Clickable";

// Launch page component - displays a form to schedule new mission launches
const Launch = props => {
  // Memoize the planets dropdown options
  // This prevents recreating the options array on every render
  // Only recalculates when props.planets changes
  const selectorBody = useMemo(() => {
    // Map each planet to an <option> element for the dropdown
    // The key prop helps React efficiently update the list
    return props.planets?.map(planet => 
      <option value={planet.keplerName} key={planet.keplerName}>
        {planet.keplerName}
      </option>
    );
  }, [props.planets]);

  // Get today's date in YYYY-MM-DD format for the date input
  // This is used to set the minimum date (can't schedule launches in the past)
  const today = new Date().toISOString().split("T")[0];

  return (
    <Appear id="launch" animate show={props.entered}>
      {/* Description text explaining what this page does */}
      <Paragraph>Schedule a mission launch for interstellar travel to one of the Kepler Exoplanets.</Paragraph>
      <Paragraph>Only confirmed planets matching the following criteria are available for the earliest scheduled missions:</Paragraph>
      
      {/* List of criteria for habitable planets */}
      <ul>
        <li>Planetary radius &lt; 1.6 times Earth's radius</li>
        <li>Effective stellar flux &gt; 0.36 times Earth's value and &lt; 1.11 times Earth's value</li>
      </ul>

      {/* Form to submit a new launch */}
      {/* onSubmit handler is called when the form is submitted */}
      <form onSubmit={props.submitLaunch} style={{
        display: "inline-grid", 
        gridTemplateColumns: "auto auto", 
        gridGap: "10px 20px"
      }}>
        {/* Launch date input - must be today or in the future */}
        <label htmlFor="launch-day">Launch Date</label>
        <input 
          type="date" 
          id="launch-day" 
          name="launch-day" 
          min={today} 
          max="2040-12-31" 
          defaultValue={today} 
        />
        
        {/* Mission name input */}
        <label htmlFor="mission-name">Mission Name</label>
        <input 
          type="text" 
          id="mission-name" 
          name="mission-name" 
          required
        />
        
        {/* Rocket type input - has a default value */}
        <label htmlFor="rocket-name">Rocket Type</label>
        <input 
          type="text" 
          id="rocket-name" 
          name="rocket-name" 
          defaultValue="Explorer IS1" 
        />
        
        {/* Planet selector dropdown - populated with habitable planets */}
        <label htmlFor="planets-selector">Destination Exoplanet</label>
        <select id="planets-selector" name="planets-selector" required>
          <option value="">Select a planet...</option>
          {selectorBody}
        </select>
        {props.planets && props.planets.length === 0 && (
          <span style={{color: 'red', fontSize: '12px', gridColumn: '2'}}>
            No planets available. Make sure backend server is running.
          </span>
        )}
        
        {/* Submit button - disabled while launch is being processed */}
        <Clickable>
          <Button 
            animate 
            show={props.entered} 
            type="submit" 
            layer="success" 
            disabled={props.isPendingLaunch}>
            Launch Mission ✔
          </Button>
        </Clickable>
        
        {/* Loading spinner shown while launch is being submitted */}
        {props.isPendingLaunch && (
          <Loading animate small />
        )}
      </form>
    </Appear>
  );
};

export default Launch;
