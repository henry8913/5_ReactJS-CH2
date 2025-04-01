
import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Container className="text-center py-5 mt-5">
      <h1 className="display-1">404</h1>
      <h2 className="mb-4">Pagina Non Trovata</h2>
      <p className="lead mb-4">La pagina che stai cercando non esiste.</p>
      <Link to="/" className="btn btn-primary">
        Torna alla Home
      </Link>
    </Container>
  );
};

export default NotFound;
