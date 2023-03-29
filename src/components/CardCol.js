import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './styling/CardCol.css';

const CardCol = ({id, title, pathName, text, imgSrc}) => {
  return (
    <Col style={{ marginTop: '20px'}} lg={12}>
      <Card>
        <Card.Img variant="top" src={`images/${imgSrc}`} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{text}</Card.Text>
          <Link to={`events/${pathName}`}>
            <Button id='card-button'>
              Register
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardCol;
