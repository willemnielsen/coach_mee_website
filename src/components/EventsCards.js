import { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import CardCol from "./CardCol";
import "./styling/CardRow.css";

const EventCards = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    const dataFetch = async () => {
      const response = await fetch("https://eventsapi-production.up.railway.app/events");
      const data = await response.json();
      setEvents(data);
      console.log(data);
    };
    dataFetch();
  }, []);

  return (
    <Row id="card-row">
      {events ? (
        events.map((event) => (
          <CardCol
            key={event.id}
            // title={event.title}
            // text={event.text}
            imgSrc={event.imgSrc}
            pathName={event.pathName}
          />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </Row>
  );
};

export default EventCards;
