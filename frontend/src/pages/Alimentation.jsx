import React from 'react';
import { useLocation } from 'react-router-dom';
import ArtisanList from '../components/ArtisanList';

function Alimentation({ artisans }) {
  const location = useLocation();
  const highlightNom = location.state?.highlight?.toLowerCase();

  const filteredArtisans = artisans.filter(
    artisan => artisan["catégorie"] && artisan["catégorie"].toLowerCase() === 'alimentation'
  );

  const sortedArtisans = [...filteredArtisans].sort((a, b) => {
    if (highlightNom && a.nom.toLowerCase().includes(highlightNom)) return -1;
    if (highlightNom && b.nom.toLowerCase().includes(highlightNom)) return 1;
    return 0;
  });

  return (
    <main className="container my-5">
      <header className="text-center mb-4">
        <h1 className="display-5">Alimentation</h1>
        <p className="text-muted">Tous les artisans dans le secteur de l'alimentation.</p>
      </header>

      {sortedArtisans.length > 0 ? (
        <ArtisanList artisans={sortedArtisans} highlightNom={highlightNom} />
      ) : (
        <div className="alert alert-warning text-center">
          Aucun artisan trouvé dans cette catégorie.
        </div>
      )}
    </main>
  );
}

export default Alimentation;
