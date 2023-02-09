import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css'


export default class NavBar extends Component {
  render() {
    return (
    <Navbar bg='light gray' expand="lg" id='nav1' className='fixed-top'>
      <Container id='nav-container' fluid>
        <Navbar.Brand href="#home">Ryan Mee</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='ml-auto' id='toggle' />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Events</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div class="the-blur"></div>
      </Container>
    </Navbar>
    )
  }
}
