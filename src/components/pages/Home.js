import React, { Component } from 'react'
import NavBar from '../NavBar'
import HeroSection from '../HeroSection'
import './Home.css'

export default class Home extends Component {
  render() {
    return (
      <>
        <NavBar />
        <HeroSection />
      </>
    )
  }
}
