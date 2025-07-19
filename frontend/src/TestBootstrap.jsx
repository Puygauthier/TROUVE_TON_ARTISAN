import React from 'react';

export default function TestBootstrap() {
  return (
    <div className="container mt-4">
      <nav className="navbar navbar-expand navbar-light bg-light">
        <a className="navbar-brand" href="/">Test Bootstrap</a>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#home">Accueil</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#about">À propos</a>
          </li>
        </ul>
      </nav>
      <button className="btn btn-primary mt-3">Bouton Bootstrap</button>
    </div>
  );
}
