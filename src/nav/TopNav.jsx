import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

import { Link } from "react-router-dom";

const TopNav = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Wribbenhall School
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>

            <Nav.Link as={Link} to="/policies">
              Policies
            </Nav.Link>

            <Nav.Link as={Link} to="/gallery">
              Gallery
            </Nav.Link>

            <Nav.Link as={Link} to="/calendar">
              Our Calendar
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/contact">
              Contact Us
            </Nav.Link>
            <NavDropdown title="Accessibility" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1" disabled>
                Contrast Options
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <br />
              <NavDropdown.Item href="#action/3.1" disabled>
                Font Size
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                onClick={(e) => {
                  // Prevent dropdown from being closed
                  e.stopPropagation();
                  let el = document.getElementById("root");
                  el.style.backgroundColor = "black";
                }}
              >
                +
              </NavDropdown.Item>
              <NavDropdown.Item>-</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopNav;
