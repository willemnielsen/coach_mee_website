import React from 'react';
import { Card, Col } from 'react-bootstrap';

const CardCol = ({title, text, imgSrc}) => {
  return (
    <Col style={{ marginTop: '20px'}} md={4} >
      <Card>
        <Card.Img variant="top" src={imgSrc} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{text}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardCol;
