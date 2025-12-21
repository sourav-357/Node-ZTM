// Base URL for the API server
// In production, this should be an environment variable
const API_URL = 'http://localhost:8000';

// Function to fetch all planets from the API
// Returns a Promise that resolves to an array of planet objects
async function httpGetPlanets() {
  try {
    // Make GET request to /planets endpoint
    const response = await fetch(`${API_URL}/planets`);
    
    // Check if response is ok
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    // Parse the JSON response and return it
    return await response.json();
  } catch (error) {
    // If network error or other error occurs, log it and return empty array
    console.error('Error fetching planets:', error);
    return [];
  }
}

// Function to fetch all launches from the API
// Returns a Promise that resolves to a sorted array of launch objects
async function httpGetLaunches() {
  try {
    // Make GET request to /launches endpoint
    const response = await fetch(`${API_URL}/launches`);
    
    // Check if response is ok
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    // Parse the JSON response
    const fetchedLaunches = await response.json();
    // Sort launches by flight number (ascending order)
    // This ensures launches are displayed in chronological order
    return fetchedLaunches.sort((a, b) => {
      return a.flightNumber - b.flightNumber;
    });
  } catch (error) {
    // If network error or other error occurs, log it and return empty array
    console.error('Error fetching launches:', error);
    return [];
  }
}

// Function to submit a new launch to the API
// Takes a launch object with mission, rocket, launchDate, and target
// Returns a Promise that resolves to a Response object
async function httpSubmitLaunch(launch) {
  try {
    // Make POST request to /launches endpoint
    return await fetch(`${API_URL}/launches`, {
      method: "post", // HTTP method for creating new resources
      headers: {
        "Content-Type": "application/json", // Tell server we're sending JSON
      },
      body: JSON.stringify(launch), // Convert launch object to JSON string
    });
  } catch(err) {
    // If network error occurs, return a failed response object
    // This prevents the app from crashing
    return {
      ok: false,
    };
  }
}

// Function to abort (cancel) a launch
// Takes the flight number (id) of the launch to abort
// Returns a Promise that resolves to a Response object
async function httpAbortLaunch(id) {
  try {
    // Make DELETE request to /launches/:id endpoint
    // DELETE is the standard HTTP method for removing resources
    return await fetch(`${API_URL}/launches/${id}`, {
      method: "delete",
    });
  } catch(error) {
    // If network error occurs, log it and return a failed response
    console.log(error);
    return {
      ok: false,
    };
  } 
}

// Export all functions so they can be imported in other files
export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
};

