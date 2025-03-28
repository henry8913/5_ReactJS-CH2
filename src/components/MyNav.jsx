import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

function MyNav({ searchQuery, setSearchQuery }) {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <Navbar bg="white" expand="lg" fixed="top" className="shadow-sm py-2">
      <Container>
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <img src="/img/logo.png" alt="EPICBooks Logo" className="logo me-2" />
          <span className="fw-bold">EPICBooks</span>
        </Link>
        <div className="d-flex align-items-center">
          <button onClick={toggleTheme} className="btn btn-outline-primary d-lg-none me-2">
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </div>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-flex align-items-center">
            <Form className="d-flex">
              <Form.Control 
                type="text" 
                placeholder="Search" 
                className="me-2"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </Form>
            <Nav.Link as={Link} to="/" className="me-3">Home</Nav.Link>
            <Nav.Link as={Link} to="/about" className="me-3">About</Nav.Link>
            <Nav.Link href="#" className="me-3">Browse</Nav.Link>
            <button onClick={toggleTheme} className="btn btn-outline-primary d-none d-lg-block">
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNav;