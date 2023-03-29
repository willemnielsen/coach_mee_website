import { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import CardCol from "./CardCol";
import "./styling/CardRow.css";

const EventCards = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    const dataFetch = async () => {
      const response = await fetch("http://localhost:3001/events");
      const data = await response.json();
      setEvents(data);
      console.log(data);
    };
    dataFetch();
  }, []);

  return (
    <Row id="card-row" xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
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
