import { Row } from 'react-bootstrap';
import CardCol from './CardCol';
import './styling/CardRow.css';
import useEvents from '../frontend_api/useEvents';


const CardRow = () => {
  const events = useEvents();
  return (
    <Row id='card-row'>
      {events ? (
        events.map(event => (
            <CardCol
              title={event.title}
              text={event.text}
              imgSrc={event.imgSrc}
          />
        ))
      ) : (
        <p>Loading...</p>

      )}
    </Row>
  );
};

export default CardRow;
