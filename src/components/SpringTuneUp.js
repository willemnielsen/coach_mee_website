import React from 'react'
import { Container, Col, Image } from 'react-bootstrap'

const SpringTuneUp = ({ img1Src, img2Src }) => {
    console.log(img1Src);
  return (
    <>
    <Container fluid>
        
        <Col>
        
            <Image src={`/images/${img1Src}`} fluid />
        </Col>
        <Col>
            <Image src={`/images/${img2Src}`} fluid />
        </Col>
    </Container>
    </>
  )
}

export default SpringTuneUp