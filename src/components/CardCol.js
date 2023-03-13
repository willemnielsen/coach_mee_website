import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import './CardCol.css';

const CardCol = ({title, text, imgSrc}) => {
  return (
    <Col style={{ marginTop: '20px'}} lg={4} md={5} sm={5}>
      <Card>
        <Card.Img variant="top" src={imgSrc} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{text}</Card.Text>
          <Button id='card-button'>
            Register
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardCol;
