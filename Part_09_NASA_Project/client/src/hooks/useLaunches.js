import { useCallback, useEffect, useState } from "react";
import {
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
} from './requests';

// Custom hook for managing launches state and operations
// Handles fetching, submitting, and aborting launches
// Sound callbacks are passed from parent for better UX feedback
function useLaunches(onSuccessSound, onAbortSound, onFailureSound) {
  const [launches, saveLaunches] = useState([]);
  const [isPendingLaunch, setPendingLaunch] = useState(false);

  // Memoized to prevent unnecessary re-renders
  const getLaunches = useCallback(async () => {
    try {
      const fetchedLaunches = await httpGetLaunches();
      saveLaunches(fetchedLaunches);
    } catch (error) {
      console.error('Error in getLaunches:', error);
      // Keep empty array on error to prevent crashes
      saveLaunches([]);
    }
  }, []);

  // Fetch launches on mount
  useEffect(() => {
    getLaunches();
  }, [getLaunches]);

  // Handles form submission - extracts data and sends to API
  const submitLaunch = useCallback(async (e) => {
    e.preventDefault();
    setPendingLaunch(true);
    
    // Extract form values
    const data = new FormData(e.target);
    const launchDate = new Date(data.get("launch-day"));
    const mission = data.get("mission-name");
    const rocket = data.get("rocket-name");
    const target = data.get("planets-selector");
    
    const response = await httpSubmitLaunch({
      launchDate,
      mission,
      rocket,
      target,
    });

    if (response.ok) {
      getLaunches();
      // Small delay for better UX - gives user feedback before hiding spinner
      setTimeout(() => {
        setPendingLaunch(false);
        onSuccessSound();
      }, 800);
    } else {
      setPendingLaunch(false);
      onFailureSound();
    }
  }, [getLaunches, onSuccessSound, onFailureSound]);

  // Aborts a launch and refreshes the list
  const abortLaunch = useCallback(async (id) => {
    const response = await httpAbortLaunch(id);

    if (response.ok) {
      getLaunches();
      onAbortSound();
    } else {
      onFailureSound();
    }
  }, [getLaunches, onAbortSound, onFailureSound]);

  return {
    launches,
    isPendingLaunch,
    submitLaunch,
    abortLaunch,
  };
}

export default useLaunches;

