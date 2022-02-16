import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Navigation.css";

const Navigation = () => {
  return (
    <div>
      <Navbar collapseOnSelect fixed="top" className="bg colors" expand="lg">
        <Container>
          <Navbar.Brand className="colors">{/* React-Bootstrap */}</Navbar.Brand>
          <Navbar.Toggle className="toggle colors" aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link href="#deets" className=" navber">
                More deets
              </Nav.Link>
              <Nav.Link eventKey={2} className=" navber" href="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
