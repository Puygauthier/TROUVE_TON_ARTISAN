// src/components/ArtisanList.jsx

import React from 'react';
import ArtisanCard from './ArtisanCard';

function ArtisanList({ artisans }) {
  return (
    <div className="container my-5">
      <h2 className="mb-4">Nos artisans</h2>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {artisans.map((artisan) => (
          <div className="col" key={artisan.id}>
            <ArtisanCard artisan={artisan} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ArtisanList;

