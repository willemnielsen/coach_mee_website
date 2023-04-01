import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import './styling/CardCol.css';

const CardCol = ({id, title, pathName, text, imgSrc}) => {
  return (
    <Col style={{ marginTop: '20px'}} lg={12}>
      <Card>
        <Card.Img variant="top" src={`images/${imgSrc}`} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{text}</Card.Text>
          <a href="https://coachmeellc.aidaform.com/spring-tuneup-registration" target="_blank" rel="noreferrer" >
            <Button id='card-button'>
              Register
            </Button>
          </a>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardCol;
