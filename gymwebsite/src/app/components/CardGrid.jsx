import MyCard from './Card';
import './CardGrid.css'
import dummyWorkoutData from '../data/dummyWorkoutData';

export default function CardGrid() {
    const GridItem = ({ children }) => (
        <div className="grid-item">
          {children}
        </div>
    );

    return (
        <div className="grid-container">
            {dummyWorkoutData.map((item) => (
                <GridItem><MyCard 
                    group = {item.group} 
                    name = {item.name} 
                    weight = {item.weight}
                    reps = {item.reps}
                    sets = {item.sets}
                ></MyCard></GridItem>
            ))}
        </div>
    )
}

/*
 <GridItem><MyCard></MyCard></GridItem>
            <GridItem><MyCard></MyCard></GridItem>
            <GridItem><MyCard></MyCard></GridItem>
            <GridItem><MyCard></MyCard></GridItem>
            <GridItem><MyCard></MyCard></GridItem>
            <GridItem><MyCard></MyCard></GridItem>
            <GridItem><MyCard></MyCard></GridItem>
            <GridItem><MyCard></MyCard></GridItem>
            <GridItem><MyCard></MyCard></GridItem>
            <GridItem><MyCard></MyCard></GridItem>
            */