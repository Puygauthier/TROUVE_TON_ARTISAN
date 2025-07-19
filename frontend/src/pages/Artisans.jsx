import React from 'react';
import ArtisanList from '../components/ArtisanList';

function Artisans({ artisans }) {
  return (
    <main className="container my-5">
      <header className="text-center mb-4">
        <h1 className="display-5">Artisans disponibles</h1>
        <p className="text-muted">Voici les professionnels de la catégorie sélectionnée.</p>
      </header>

      {artisans.length > 0 ? (
        <ArtisanList artisans={artisans} />
      ) : (
        <div className="alert alert-warning text-center">
          Aucun artisan trouvé pour cette catégorie ou cette recherche.
        </div>
      )}
    </main>
  );
}

export default Artisans;
