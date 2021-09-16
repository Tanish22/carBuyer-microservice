import React from "react";
import * as ReactBootstrap from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';

const NavigationBar = () => {
    return (
      <>
        <ReactBootstrap.Navbar bg="light" expand="lg">
          <ReactBootstrap.Container>
            <ReactBootstrap.Navbar.Brand href="#home">Car Buyer</ReactBootstrap.Navbar.Brand>
            <ReactBootstrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
            <ReactBootstrap.Navbar.Collapse id="basic-navbar-nav">
              <ReactBootstrap.Nav className="me-auto">
                <ReactBootstrap.Nav.Link href="#home">Sign In</ReactBootstrap.Nav.Link>
                <ReactBootstrap.Nav.Link href="#link">Sign Up</ReactBootstrap.Nav.Link>
                <ReactBootstrap.NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <ReactBootstrap.NavDropdown.Item href="#action/3.1">Action</ReactBootstrap.NavDropdown.Item>
                  <ReactBootstrap.NavDropdown.Item href="#action/3.2">Another action</ReactBootstrap.NavDropdown.Item>
                  <ReactBootstrap.NavDropdown.Item href="#action/3.3">Something</ReactBootstrap.NavDropdown.Item>
                  <ReactBootstrap.NavDropdown.Divider />
                  <ReactBootstrap.NavDropdown.Item href="#action/3.4">Separated link</ReactBootstrap.NavDropdown.Item>
                </ReactBootstrap.NavDropdown>
              </ReactBootstrap.Nav>
            </ReactBootstrap.Navbar.Collapse>
          </ReactBootstrap.Container>
        </ReactBootstrap.Navbar>  
      </>
    )
}

export default NavigationBar;