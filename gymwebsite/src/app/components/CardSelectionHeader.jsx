import './CardSelectionHeader.css'
import { addWorkout } from '../data/WorkoutData'
import React, { useEffect, useState } from 'react';
import PopUpSelection from './PopUpSelection';


export default function CardSelectionHeader() {
    return <header className="Selection-header">
        <PopUpSelection></PopUpSelection>
    </header>
}