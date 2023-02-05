import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'; 
import './HeroSection.css'

export default class HeroSection extends Component {
  render() {
    return (
      <>

        <Container id='hero-section-container' fluid>
          <Row id='hero-section' className="align-items-end">
            <Col id='image' md={{ span: 7, order: 2 }}>
            </Col>
            <Col id='title' md={{ span: 5, order: 1 }} >
              <Row>Head Coach Vassar Men's Basketball</Row>
              <Row>
                <Button className='hero-button'>ABOUT ME</Button>
              </Row>
            </Col>
          </Row>
        </Container>
        {/* <div className='title'>
              Vassar Men's Basketball Head Coach
        </div>
        <div className='other'>
        </div> */}
        {/* <a href='/'>
            <Button>LEARN MORE</Button>
        </a> */}
      </>
    )
  }
}
