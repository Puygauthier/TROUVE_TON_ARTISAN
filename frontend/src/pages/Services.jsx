import React from 'react';
import { useLocation } from 'react-router-dom';
import ArtisanList from '../components/ArtisanList';

function Services({ artisans }) {
  const location = useLocation();
  const highlightNom = location.state?.highlight?.toLowerCase();

  const sortedArtisans = [...artisans].sort((a, b) => {
    if (highlightNom && a.nom.toLowerCase().includes(highlightNom)) return -1;
    if (highlightNom && b.nom.toLowerCase().includes(highlightNom)) return 1;
    return 0;
  });

  return (
    <main className="container my-5">
      <header className="text-center mb-4">
        <h1 className="display-5">Services</h1>
        <p className="text-muted">Découvrez nos artisans dans le domaine des services.</p>
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

export default Services;
