import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './styling/NavBar.css'
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

function NavBar() {
  const location = useLocation(); 
  const [expanded, setExpanded] = useState(false);


  return (
    <>
    <Navbar expanded={expanded} bg='light gray' expand="lg" id='nav1' className='fixed-top'>
      <Container id='nav-container' fluid>
        <Navbar.Brand href="/">Ryan Mee</Navbar.Brand>
        <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} aria-controls="basic-navbar-nav" className='ml-auto' id='toggle' />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav className="me-auto">
            <Nav.Link onClick={() => setExpanded(false)} as={Link} to="/" active={location.pathname === '/'}>
              Home
            </Nav.Link>
            <Nav.Link onClick={() => setExpanded(false)} as={Link} to="/about" active={location.pathname === '/about'}>
              About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div class="the-blur"></div>
      </Container>
    </Navbar>
    </>
    )
  }

export default NavBar
