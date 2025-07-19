import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import StarRating from '../components/StarRating';
import artisansData from '../data/artisans.json';

export default function ArtisanDetail() {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    objet: '',
    message: '',
  });

  const artisan = artisansData.find(a => a.id === parseInt(id));
  if (!artisan) return <p>Artisan non trouvé</p>;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message envoyé à ${artisan.email}:\nObjet: ${formData.objet}\nMessage: ${formData.message}`);
    setFormData({ nom: '', email: '', objet: '', message: '' });
  };

  return (
    <main className="container py-4">
      <h1 className="display-5 text-center mb-4">{artisan.nom}</h1>

      <div className="artisandetail-wrapper">
        <div className="left-info">
          <p><strong>Localisation :</strong> {artisan.ville}</p>
          <p><strong>A propos :</strong><br />{artisan['à propos']}</p>
        </div>

        <div className="center-photo">
          <div className="photo-placeholder" aria-label="Photo de l'artisan"></div>
          <div className="star-rating" aria-label={`Note: ${artisan.note} sur 5`}>
            <StarRating rating={artisan.note} />
            <span> ({artisan.note}/5)</span>
          </div>
          <p><strong>Spécialité :</strong> {artisan['spécialité']}</p>
          {artisan['site web'] && (
            <p>
              <a href={artisan['site web']} target="_blank" rel="noopener noreferrer">
                Site web
              </a>
            </p>
          )}
        </div>

        <div className="right-form">
          <form onSubmit={handleSubmit} aria-label={`Formulaire de contact pour ${artisan.nom}`}>
            <div className="mb-3">
              <label htmlFor="nom" className="form-label">Nom</label>
              <input
                type="text"
                id="nom"
                name="nom"
                className="form-control"
                value={formData.nom}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="objet" className="form-label">Objet</label>
              <input
                type="text"
                id="objet"
                name="objet"
                className="form-control"
                value={formData.objet}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                id="message"
                name="message"
                className="form-control"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary">Envoyer</button>
          </form>
        </div>
      </div>
    </main>
  );
}
