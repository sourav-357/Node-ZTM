// Import useMemo hook from React
// useMemo prevents unnecessary recalculations of the table rows
import { useMemo } from "react";

// Import Arwes UI components for sci-fi styling
import { 
  withStyles,
  Appear,
  Link,
  Paragraph,
  Table,
  Words,
} from "arwes";

// Import Clickable component for sound effects
import Clickable from "../components/Clickable";

// Define CSS styles for the component
const styles = () => ({
  link: {
    color: "red", // Red color for abort button
    textDecoration: "none",
  },
});

// Upcoming launches page component
// Displays all scheduled launches that haven't happened yet
const Upcoming = props => {
  const { 
    entered,        // Animation state from parent
    launches,       // Array of all launches from API
    classes,        // CSS classes from withStyles
    abortLaunch,    // Function to abort a launch
  } = props;

  // Memoize the table body to avoid recalculating on every render
  // Only recalculates when launches, abortLaunch, or classes.link changes
  const tableBody = useMemo(() => {
    // Filter to get only upcoming launches (launch.upcoming === true)
    // Then map each launch to a table row
    return launches?.filter((launch) => launch.upcoming)
      .map((launch) => {
        return (
          <tr key={String(launch.flightNumber)}>
            {/* Abort button - clicking this cancels the launch */}
            <td>
              <Clickable style={{color:"red"}}>
                <Link 
                  className={classes.link} 
                  onClick={() => abortLaunch(launch.flightNumber)}
                >
                  ✖
                </Link>
              </Clickable>
            </td>
            {/* Flight number */}
            <td>{launch.flightNumber}</td>
            {/* Launch date formatted as readable string */}
            <td>{new Date(launch.launchDate).toDateString()}</td>
            {/* Mission name */}
            <td>{launch.mission}</td>
            {/* Rocket type */}
            <td>{launch.rocket}</td>
            {/* Destination planet */}
            <td>{launch.target}</td>
          </tr>
        );
      });
  }, [launches, abortLaunch, classes.link]);

  return (
    <Appear id="upcoming" animate show={entered}>
      {/* Description text */}
      <Paragraph>Upcoming missions including both SpaceX launches and newly scheduled Zero to Mastery rockets.</Paragraph>
      
      {/* Warning message about aborting missions */}
      <Words animate>Warning! Clicking on the ✖ aborts the mission.</Words>
      
      {/* Table displaying upcoming launches */}
      <Table animate show={entered}>
        <table style={{tableLayout: "fixed"}}>
          {/* Table header with column names */}
          <thead>
            <tr>
              <th style={{width: "3rem"}}></th> {/* Abort button column */}
              <th style={{width: "3rem"}}>No.</th>
              <th style={{width: "10rem"}}>Date</th>
              <th style={{width: "11rem"}}>Mission</th>
              <th style={{width: "11rem"}}>Rocket</th>
              <th>Destination</th>
            </tr>
          </thead>
          {/* Table body with launch data */}
          <tbody>
            {tableBody}
          </tbody>
        </table>
      </Table>
    </Appear>
  );
}

// Export component wrapped with withStyles HOC for CSS-in-JS styling
export default withStyles(styles)(Upcoming);

