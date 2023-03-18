import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {Row, Button } from 'react-bootstrap'; 
import './HeroSection.css'

export default class HeroSection extends Component {
  render() {
    return (
      <Row id='hero-section'>
        <Row className='title mt-auto'>Head Coach of Vassar Men's Basketball</Row>
        <Row id='hero-row'>
          <Link to={"/about"}>
            <Button className='hero-button'>ABOUT ME</Button>
          </Link>
        </Row>
      </Row>
    )
  }
} 
