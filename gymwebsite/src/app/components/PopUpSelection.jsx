import React, { useState } from "react";
import { addWorkout } from '../data/WorkoutData';
import './PopUpSelection.css';

export default function PopUpSelection ({ updateWorkouts }) {
    // State for controlling if the popup is open or closed
    const [isOpen, setIsOpen] = useState(false);
    const openPopup = () => setIsOpen(true);
    const closePopup = () => setIsOpen(false);

    // State to track the new workout
    const [newWorkout, setNewWorkout] = useState({
        groupname: '',  // You can set default values here if needed
        name: '',
        weight: '',
        reps: '',
        sets: '',
    });

    // Update newWorkout when user types in any input field
    const handleInputChange = (e) => {
        const { name, value } = e.target; 
        setNewWorkout((prevWorkout) => ({
            ...prevWorkout, 
            [name]: value 
        }));
    };

    // Call addWorkout to save the new workout
    const addAWorkout = async () => {
        try {
            const addedWorkout = await addWorkout(newWorkout);
            updateWorkouts(addedWorkout);
            closePopup(); // Close the popup after submission
            // Optionally, clear the form if needed
            setNewWorkout({ groupname: '', name: '', weight: '', reps: '', sets: '' });
        } catch (error) {
            console.error('Error adding workout:', error);
        }
    };

    // Popup component 
    function Popup({ closePopup }) {
        return (
            <div className="modal">
                <div className="modal-content">
                    <h2>Add a Workout!</h2>
                    <label htmlFor="name">Name</label>
                    <input 
                        value={newWorkout.name} 
                        onChange={handleInputChange} 
                        type="text" 
                        placeholder="Workout Name" 
                        id="name" 
                        name="name" 
                    />

                    <label htmlFor="weight">Weight</label>
                    <input 
                        value={newWorkout.weight} 
                        onChange={handleInputChange} 
                        type="text" 
                        placeholder="Weight (lbs)" 
                        id="weight" 
                        name="weight" 
                    />

                    <label htmlFor="reps">Reps</label>
                    <input 
                        value={newWorkout.reps} 
                        onChange={handleInputChange} 
                        type="text" 
                        placeholder="Reps" 
                        id="reps" 
                        name="reps" 
                    />

                    <label htmlFor="sets">Sets</label>
                    <input 
                        value={newWorkout.sets} 
                        onChange={handleInputChange} 
                        type="text" 
                        placeholder="Sets" 
                        id="sets" 
                        name="sets" 
                    />
                    <div className="button-container">
                        <button className="pop-button" onClick={addAWorkout}>Submit</button>
                        <button className="pop-button" onClick={closePopup}>Close</button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div>
            <button className="add-button" onClick={openPopup}>Add New Workout</button>
            {isOpen && <Popup closePopup={closePopup} />}
        </div>
    );
};
