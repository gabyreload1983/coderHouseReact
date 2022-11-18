import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import CartWidget from "./CartWidget";

const CustomNavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">Sinapsis</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#Categoria1">Categoria1</Nav.Link>
            <Nav.Link href="#Categoria2">Categoria2</Nav.Link>
            <Nav.Link href="#Categoria3">Categoria3</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link href="#cart">
              <CartWidget />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavBar;
