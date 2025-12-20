// Import React hooks for managing state and side effects
import { useCallback, useEffect, useState } from "react";

// Import the API function to fetch planets from the backend
import { httpGetPlanets } from "./requests";

// Custom React hook to fetch and manage planets data
// This hook automatically loads planets when the component using it mounts
function usePlanets() {
  // State to store the list of planets
  // Initially empty array, will be populated after API call
  const [planets, savePlanets] = useState([]);

  // Memoized function to fetch planets from the API
  // useCallback ensures this function reference doesn't change on every render
  // This prevents unnecessary re-renders and infinite loops
  const getPlanets = useCallback(async () => {
    // Call the API to get planets data
    const fetchedPlanets = await httpGetPlanets();
    // Update state with the fetched planets
    savePlanets(fetchedPlanets);
  }, []); // Empty dependency array means this function never changes

  // useEffect runs after the component mounts
  // This automatically fetches planets when any component using this hook is rendered
  useEffect(() => {
    getPlanets();
  }, [getPlanets]); // Only re-run if getPlanets changes (which it won't due to useCallback)

  // Return the planets array so components can use it
  return planets;
}

export default usePlanets;

