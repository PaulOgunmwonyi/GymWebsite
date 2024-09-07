// src/api/workouts.js
export const getAllWorkouts = async () => {
    try {
      const response = await fetch('http://localhost:5001/api/workouts');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching workouts:', error);
      throw error;
    }
};
  
