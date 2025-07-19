import React from 'react';
import { Link } from 'react-router-dom';
import StarRating from './StarRating'; // importer le composant d’étoiles

function ArtisanCard({ artisan }) {
  return (
    <Link to={`/artisan/${artisan.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div className="card shadow-sm h-100" style={{ cursor: 'pointer' }}>
        <div className="card-body">
          <h5 className="card-title">{artisan.nom}</h5>

          <p className="card-text">
            <strong>Note : </strong>
            {/* On passe un identifiant unique basé sur l’id de l’artisan */}
            <StarRating rating={artisan.note} uniqueId={`artisan-${artisan.id}`} />{' '}
            <span className="artisan-note-number">({artisan.note}/5)</span>
          </p>

          <p className="card-text">
            <strong>Spécialité : </strong> {artisan['spécialité']}
          </p>

          <p className="card-text">
            <strong>Localisation : </strong> {artisan.ville}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default ArtisanCard;
