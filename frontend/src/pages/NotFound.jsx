import React from 'react';
import { Link } from 'react-router-dom';
import { FaHardHat } from 'react-icons/fa';

const NotFound = () => {
  return (
    <main className="notfound-container">
      <FaHardHat size={80} color="#cd2c2e" style={{ marginBottom: '1rem' }} />
      <h1>Page non trouvée</h1>
      <p>La page que vous avez demandée n'existe pas ou a été déplacée.</p>
      <Link to="/" className="notfound-link">
        Retour à l'accueil
      </Link>
    </main>
  );
};

export default NotFound;
