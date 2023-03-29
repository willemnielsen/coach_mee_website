import React, { Component } from "react";
import { Row } from "react-bootstrap";
import EventCards from "./EventsCards";
import "./styling/EventSection.css";

export default class EventSection extends Component {
  render() {
    return (
      <Row id="event-section">
        <Row className="title" style={{ color: "black", marginTop: "30px" }}>
          Upcoming Events
        </Row>
        <EventCards />
      </Row>
    );
  }
}
