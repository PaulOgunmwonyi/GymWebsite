import MyCard from './Card';
import './CardGrid.css'
import React, { useEffect, useState } from 'react';
import { getAllWorkouts } from '../data/WorkoutData';

export default function CardGrid() {
    const GridItem = ({ children }) => (
        <div className="grid-item">
          {children}
        </div>
    );

    const [workouts, setWorkouts] = useState([]);

    useEffect(() => {
        const fetchWorkouts = async () => {
          try {
            const data = await getAllWorkouts();
            setWorkouts(data);
          } catch (error) {
            console.error('Error fetching workouts:', error);
          }
        };
    
        fetchWorkouts();
      }, []);

    return (
        <div className="grid-container">
            {workouts.map((item) => (
                <GridItem><MyCard 
                    group = {item.groupname} 
                    name = {item.name} 
                    weight = {item.weight}
                    reps = {item.reps}
                    sets = {item.sets}
                ></MyCard></GridItem>
            ))}
        </div>
    )
}