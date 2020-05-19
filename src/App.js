import React from "react";
import Main from "./components/main";
import { Navbar, Nav } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar
        className="topnav"
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Navbar.Brand as={NavLink} to="/">
          Dina Liubarets
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={NavLink} to="/resume">
              Resume
            </Nav.Link>
            <Nav.Link as={NavLink} to="/aboutme">
              About
            </Nav.Link>
            <Nav.Link as={NavLink} to="/projects">
              Projects
            </Nav.Link>
            <Nav.Link as={NavLink} to="/certificates">
              Certificates
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact">
              Contact me
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div className="page-content">
        <Main />
      </div>

      <div>
        <Navbar
          className="justify-content-md-center color-footer"
          sticky="bottom"
          expand="lg"
          variant="light"
        >
          <Navbar.Brand>
            <h6 class="text-muted">
              &copy;{new Date().getFullYear()} Di Liubarets
            </h6>
          </Navbar.Brand>
        </Navbar>
      </div>
    </div>
  );
}

export default App;
