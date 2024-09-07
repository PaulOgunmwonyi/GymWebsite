import './CardSelectionHeader.css'
import { addWorkout } from '../data/WorkoutData'
import React, { useEffect, useState } from 'react';


export default function CardSelectionHeader() {
    const [newWorkout, setNewWorkout] = useState({
        groupname: 'erm',
        name: 'uh',
        weight: 7,
        reps: 7,
        sets: 7,
    });
  
    const addAWorkout = async () => {
        const addedWorkout = await addWorkout(newWorkout);
    }; 

    return <header className="Selection-header">
        <button className = "add-button" onClick={addAWorkout}> Add New Workout </button>
    </header>
}