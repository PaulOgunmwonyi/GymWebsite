import MyCard from './Card';
import './CardGrid.css'

export default function CardGrid() {
    const GridItem = ({ children }) => (
        <div className="grid-item">
          {children}
        </div>
    );

    return (
        <div className="grid-container">
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
        </div>
    )
}