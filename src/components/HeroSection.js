import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'; 
import './HeroSection.css'

export default class HeroSection extends Component {
  render() {
    return (
      <>
          <Container id='hero-section'>
            <Row>
              <Button className='hero-button'>ABOUT ME</Button>
            </Row>
            <Row id='title' className='mt-auto'>Head Coach of Vassar Men's Basketball</Row>
          </Container>
      </>
    )
  }
} 
