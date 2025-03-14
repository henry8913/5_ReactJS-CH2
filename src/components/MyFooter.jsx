import Container from 'react-bootstrap/Container';

function MyFooter() {
  return (
    <footer className="bg-dark text-white py-5 mt-5">
      <Container>
        <div className="row g-4">
          <div className="col-md-4">
            <h3 className="h5 mb-3">EPICBooks</h3>
            <p>Your trusted source for quality books online.</p>
          </div>
          <div className="col-md-4">
            <h3 className="h5 mb-3">Quick Links</h3>
            <ul className="list-unstyled">
              <li><a href="index.html" className="text-white-50">Home</a></li>
              <li><a href="about.html" className="text-white-50">About</a></li>
              <li><a href="about.html" className="text-white-50">Browse</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h3 className="h5 mb-3">Contact</h3>
            <p className="mb-2">Email: contact@epicbooks.com</p>
            <p className="mb-3">Phone: (555) 123-4567</p>
            <div className="social-icons">
              <a href="#" className="text-white-50 me-3"><i className="bi bi-facebook"></i></a>
              <a href="#" className="text-white-50 me-3"><i className="bi bi-twitter"></i></a>
              <a href="#" className="text-white-50 me-3"><i className="bi bi-instagram"></i></a>
              <a href="#" className="text-white-50"><i className="bi bi-pinterest"></i></a>
            </div>
          </div>
        </div>
        <div className="text-center text-white-50 mt-4">
          <p>&copy; 2025 EPICBooks. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}

export default MyFooter;

