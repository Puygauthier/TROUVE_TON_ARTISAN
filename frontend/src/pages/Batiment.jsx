// src/pages/Batiment.jsx
import React, { useEffect, useState } from 'react';
import ArtisanList from '../components/ArtisanList';
import artisansData from '../data/artisans.json';

function Batiment() {
  const [artisans, setArtisans] = useState([]);

  useEffect(() => {
    const filtered = artisansData.filter(
      artisan =>
        artisan.catégorie &&
        artisan.catégorie.toLowerCase() === 'bâtiment'
    );

    const sorted = filtered.sort((a, b) => b.note - a.note);
    setArtisans(sorted);
  }, []);

  return (
    <div className="container py-4">
      <div className="row justify-content-center text-center">
        <div className="col-lg-8">
          <h1 className="display-5">Bâtiment</h1>
          <p className="text-muted">Tous les artisans dans le secteur du bâtiment.</p>
        </div>
      </div>
      <ArtisanList artisans={artisans} />
    </div>
  );
}

export default Batiment;
