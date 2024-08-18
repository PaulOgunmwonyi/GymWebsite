'use client'
import CardGrid from "@/app/components/CardGrid";
import CardSelectionHeader from "@/app/components/CardSelectionHeader";

export default function HomePage() {
    return ( 
        <div className = "Workout-Page">
            <CardSelectionHeader></CardSelectionHeader>
            <CardGrid></CardGrid>
        </div>
    );
};