import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import HeroSection from '../HeroSection'
import EventSection from '../EventSection'
import '../styling/Home.css'

export default class Home extends Component {
  render() {
    return (
      <Container id='home' fluid>
        <HeroSection />
        <EventSection />
      </Container>
    )
  }
}
