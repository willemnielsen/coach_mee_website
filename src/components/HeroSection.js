import React, { Component } from 'react'
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import './HeroSection.css'

export default class HeroSection extends Component {
  render() {
    return (
      <Container id='hero-section'>
        <div className='title'>
            Head Coach - Vassar Men's Basketball
        </div>
        <a href='/'>
            <Button>LEARN MORE</Button>
        </a>
      </Container>
    )
  }
}
