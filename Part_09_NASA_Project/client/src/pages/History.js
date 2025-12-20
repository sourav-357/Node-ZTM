// Import useMemo hook from React
// useMemo prevents unnecessary recalculations of the table rows
import { useMemo } from "react";

// Import Arwes UI components for sci-fi styling
import { Appear, Table, Paragraph } from "arwes";

// History page component
// Displays all past launches (both successful and failed)
const History = props => {
  // Memoize the table body to avoid recalculating on every render
  // Only recalculates when props.launches changes
  const tableBody = useMemo(() => {
    // Filter to get only past launches (launch.upcoming === false)
    // Then map each launch to a table row
    return props.launches?.filter((launch) => !launch.upcoming)
      .map((launch) => {
        return (
          <tr key={String(launch.flightNumber)}>
            {/* Status indicator - green for success, red for failure */}
            <td>
              <span style={{
                color: launch.success ? "greenyellow" : "red"
              }}>
                █
              </span>
            </td>
            {/* Flight number */}
            <td>{launch.flightNumber}</td>
            {/* Launch date formatted as readable string */}
            <td>{new Date(launch.launchDate).toDateString()}</td>
            {/* Mission name */}
            <td>{launch.mission}</td>
            {/* Rocket type */}
            <td>{launch.rocket}</td>
            {/* Customers - join array with comma and space */}
            <td>{launch.customers?.join(", ")}</td>
          </tr>
        );
      });
  }, [props.launches]);

  return (
    <article id="history">
      <Appear animate show={props.entered}>
        {/* Description text */}
        <Paragraph>History of mission launches including SpaceX launches starting from the year 2006.</Paragraph>
        
        {/* Table displaying past launches */}
        <Table animate>
          <table style={{tableLayout: "fixed"}}>
            {/* Table header with column names */}
            <thead>
              <tr>
                <th style={{width: "2rem"}}></th> {/* Status indicator column */}
                <th style={{width: "3rem"}}>No.</th>
                <th style={{width: "9rem"}}>Date</th>
                <th>Mission</th>
                <th style={{width: "7rem"}}>Rocket</th>
                <th>Customers</th>
              </tr>
            </thead>
            {/* Table body with launch data */}
            <tbody>
              {tableBody}
            </tbody>
          </table>
        </Table>
      </Appear>
    </article>
  );
}
  
export default History;

