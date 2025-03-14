import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function MyNav() {
  return (
    <Navbar bg="white" expand="lg" fixed="top" className="shadow-sm">
      <Container>
        <Navbar.Brand href="index.html" className="d-flex align-items-center">
          <img src="/img/logo.png" alt="EPICBooks Logo" className="logo me-2" />
          <span className="fw-bold">EPICBooks</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-flex align-items-center">
            <Nav.Link href="#" className="me-3">Home</Nav.Link>
            <Nav.Link href="#" className="me-3">About</Nav.Link>
            <Nav.Link href="#" className="me-3">Browse</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNav;


