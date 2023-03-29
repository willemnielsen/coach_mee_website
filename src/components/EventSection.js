import React, { Component } from "react";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
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
        {/* <Row>
          <Link
            to="/events"
            style={{
              margin: "15px 30px",
              fontSize: "20px",
            }}
          >
            See All Events
          </Link>
        </Row> */}
      </Row>
    );
  }
}
