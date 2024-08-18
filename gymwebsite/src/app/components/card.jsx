'use client'
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function MyCard(props) {
    return ( 
        <>
            <Card
              bg={'light'}
              key={'light'}
              text={'dark'}
              style={{ width: '18rem' }}
              className="mb-2"
            >
              <Card.Header> {'Group:'} {props.group} </Card.Header>
              <Card.Body>
                <Card.Title> {'Workout:'} {props.name} </Card.Title>
                <Card.Text>
                  {props.sets} x {props.reps} : {props.weight} lbs
                </Card.Text>
              </Card.Body>
            </Card>
        </>
    );
}