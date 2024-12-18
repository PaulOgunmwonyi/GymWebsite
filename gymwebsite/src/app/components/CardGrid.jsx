import MyCard from './Card';
import './CardGrid.css';
import React, { useEffect, useState } from 'react';
import { getAllWorkouts } from '../data/WorkoutData';
import PopUpSelection from './PopUpSelection';

export default function CardGrid() {
    const GridItem = ({ children }) => (
        <div className="grid-item">
          {children}
        </div>
    );

    const [workouts, setWorkouts] = useState([]);

    const fetchWorkouts = async () => {
      try {
        const data = await getAllWorkouts();
        setWorkouts(data);
      } catch (error) {
        console.error('Error fetching workouts:', error);
      }
    };

    useEffect(() => {
      fetchWorkouts();
    }, []);

    // Function to update workouts after a new workout is added
    const updateWorkouts = (newWorkout) => {
      setWorkouts((prevWorkouts) => [newWorkout, ...prevWorkouts]); // Add the new workout to the beginning of the list
    };

    return (
      <div>
        <PopUpSelection updateWorkouts={updateWorkouts} /> 
        <div className="grid-container">
            {workouts.map((item, index) => (
                <GridItem key={index}>
                    <MyCard 
                        group={item.groupname} 
                        name={item.name} 
                        weight={item.weight}
                        reps={item.reps}
                        sets={item.sets}
                    />
                </GridItem>
            ))}
        </div>
      </div>
    );
}
