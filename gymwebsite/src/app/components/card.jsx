'use client'
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function MyCard() {
    return ( 
        <>
            <Card
              bg={'light'}
              key={'light'}
              text={'dark'}
              style={{ width: '18rem' }}
              className="mb-2"
            >
              <Card.Header>Header</Card.Header>
              <Card.Body>
                <Card.Title>{'primary'} Card Title </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
        </>
    );
}