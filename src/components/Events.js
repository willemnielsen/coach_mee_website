import { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap';
import CardCol from './CardCol';

const Events = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/events')
        .then(response => response.json())
        .then(data => {
            setEvents(data);
            console.log(events);
        })
        .catch(error => {
            console.error(error);
        });
    }, [])
    return (
        <Row id='card-row'>
          {events ? (
            events.map(event => (
                <CardCol
                  title={event.title}
                  text={event.text}
                //   imgSrc={event.imgSrc}
              />
            ))
          ) : (
            <p>Loading...</p>
    
          )}
        </Row>)
};

export default Events;