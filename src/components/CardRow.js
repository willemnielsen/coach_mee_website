import React from 'react';
import { Row } from 'react-bootstrap';
import CardCol from './CardCol';
import './CardRow.css';

const CardRow = () => {
  return (
    <Row id='card-row'>
      <CardCol 
        title="Card Title 1" 
        text="Some quick example text to build on the card title and make up the bulk of the card's content." 
        imgSrc="https://via.placeholder.com/150"
      />
      <CardCol 
        title="Card Title 2" 
        text="Some quick example text to build on the card title and make up the bulk of the card's content." 
        imgSrc="https://via.placeholder.com/150"
      />
      <CardCol 
        title="Card Title 3" 
        text="Some quick example text to build on the card title and make up the bulk of the card's content." 
        imgSrc="https://via.placeholder.com/150"
      />
    </Row>
  );
};

export default CardRow;
