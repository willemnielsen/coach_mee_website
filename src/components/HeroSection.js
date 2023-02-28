import React, { Component } from 'react'
import { Container, Row, Button } from 'react-bootstrap'; 
import './HeroSection.css'

export default class HeroSection extends Component {
  render() {
    return (
      <>
          <Container id='hero-section' fluid>
            <Row id='title' className='mt-auto'>Head Coach of Vassar Men's Basketball</Row>
            <Row id='hero-row'>
              <Button className='hero-button'>ABOUT ME</Button>
            </Row>
          </Container>
      </>
    )
  }
} 
