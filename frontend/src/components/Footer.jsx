import React from 'react';
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer-custom mt-4">
      <div className="container footer-content py-3">

        {/* Ligne à 3 blocs avec centrage parfait */}
        <div
          className="d-flex justify-content-between align-items-stretch px-3"
          style={{ minHeight: '120px' }}
        >
          {/* Colonne gauche */}
          <div style={{ flex: 1 }} className="d-flex flex-column justify-content-start text-start">
            <h5 className="mb-2">Pages légales</h5>
            <ul className="list-unstyled mb-0" aria-label="Liens vers les pages légales">
              <li><NavLink className="text-white" to="/mentions-legales">Mentions légales</NavLink></li>
              <li><NavLink className="text-white" to="/donnees-personnelles">Données personnelles</NavLink></li>
              <li><NavLink className="text-white" to="/accessibilite">Accessibilité</NavLink></li>
              <li><NavLink className="text-white" to="/cookies">Cookies</NavLink></li>
            </ul>
          </div>

          {/* Colonne centre avec favicon centré verticalement et horizontalement */}
          <div
            style={{ flex: '0 0 auto' }}
            className="d-flex justify-content-center align-items-center"
          >
            <img
              src="/favicon-32.png"
              alt="Icône artisan"
              style={{ width: '40px', height: '40px' }}
            />
          </div>

          {/* Colonne droite */}
          <div style={{ flex: 1 }} className="d-flex flex-column justify-content-start text-end">
            <h5 className="mb-2">Contact de l’antenne de Lyon</h5>
            <address className="mb-0">
              101 cours Charlemagne<br />
              CS 20033<br />
              69269 LYON CEDEX 02<br />
              France<br />
              Tél : +33 (0)4 26 73 40 00
            </address>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-3">
          <small>&copy; {new Date().getFullYear()} Trouve ton artisan ! - Tous droits réservés</small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
