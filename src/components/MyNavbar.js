import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
// mport { Link } from 'react-router-dom';

function MyNavbar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand className="text-warning" href="/">TRIP</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link className="text-warning" href="/home">Home</Nav.Link>
          <Nav.Link className="text-warning" href="#Hotels">Hotels</Nav.Link>
          <Nav.Link className="text-warning" href="#Restaurants">Restaurants</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;

