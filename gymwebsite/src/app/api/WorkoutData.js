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
  
export async function addWorkout(workout) {
    try {
      const response = await fetch('http://localhost:5001/api/workouts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(workout),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return await response.json();
    } catch (error) {
      console.error('Error adding workout:', error);
    }
  }
  
  export const deleteWorkout = async (id) => {
    try {
        const response = await fetch(`http://localhost:5001/api/workouts/${id}`, {
            method: 'DELETE',
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data;  // This returns the deleted workout data
    } catch (error) {
        console.error('Error deleting workout:', error);
        throw error;
    }
};

  