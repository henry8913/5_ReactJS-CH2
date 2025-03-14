import Container from 'react-bootstrap/Container';

function Welcome() {
  return (
    <header className="hero-section position-relative py-5 mb-5 bg-light text-center">
      <Container className="py-5">
        <h1 className="display-4 fw-bold mb-3">Welcome to EPICBooks</h1>
        <p className="lead">Discover your next favorite book in our collection</p>
      </Container>
    </header>
  );
}

export default Welcome;