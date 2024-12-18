import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Card.css';
import { deleteWorkout } from '../api/WorkoutData';  

export default function MyCard(props) {
  const { updateWorkouts, number } = props;  // Get updateWorkouts function and workout ID from props

  const deleteAWorkout = async () => {
    try {
      await deleteWorkout(number);  // Call the deleteWorkout API with the workout ID
      updateWorkouts(number);  // Call updateWorkouts to update the state in CardGrid
    } catch (error) {
      console.error('Error deleting workout:', error);
    }
  };

  return ( 
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
        <div className="button-container">
          <button className="edit-button"> Edit </button>
          <button className="delete-button" onClick={deleteAWorkout}> Delete </button>
        </div>
      </Card.Body>
    </Card>
  );
}
