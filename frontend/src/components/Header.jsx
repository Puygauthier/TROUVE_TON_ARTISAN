import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../images/Logo.png';
import artisansData from '../data/artisans.json';

function Header({ artisans, onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  function handleSearchChange(e) {
    const value = e.target.value;
    setSearchTerm(value);
    if (onSearch) onSearch(value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const foundArtisan = artisansData.find((a) =>
      a.nom.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (foundArtisan) {
      const catPath = `/${foundArtisan.catégorie.toLowerCase()}`;
      navigate(catPath, { state: { highlight: foundArtisan.nom } });
    }
  }

  const categories = [...new Set(artisansData.map(a => a.catégorie))];

  return (
    <nav className="navbar navbar-expand-lg navbar-custom" style={{ height: '70px' }}>
      <div className="container-fluid d-flex align-items-center justify-content-between" style={{ height: '100%' }}>
        <NavLink to="/" className="navbar-brand p-0 m-0 d-flex align-items-center">
          <img src={logo} alt="Logo Trouve ton artisan" className="logo-img" />
        </NavLink>

        <form
          className="d-flex flex-grow-1 justify-content-center"
          onSubmit={handleSubmit}
          role="search"
          aria-label="Recherche artisans"
          style={{ maxWidth: '350px' }}
        >
          <div className="d-flex align-items-center w-100" style={{ gap: '8px' }}>
            <input
              className="form-control flex-grow-1"
              type="search"
              placeholder="Rechercher un artisan"
              aria-label="Recherche un artisan par nom"
              value={searchTerm}
              onChange={handleSearchChange}
              style={{ height: '40px' }}
            />
            <img
              src="/favicon-32.png"
              alt="Icône artisan"
              style={{ width: '32px', height: '32px' }}
            />
          </div>
        </form>

        <div style={{ display: 'flex', alignItems: 'center' }}>
          <ul className="navbar-nav mb-0 d-flex flex-row gap-3">
            {categories.map((cat) => (
              <li className="nav-item" key={cat}>
                <NavLink className="nav-link" to={`/${cat.toLowerCase()}`}>
                  {cat}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
