import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Ici tu peux ajouter l’envoi vers l’API backend plus tard
    setSubmitted(true);
  }

  return (
    <main>
      <header>
        <h1>Contactez un artisan ou proposez votre profil</h1>
      </header>

      {submitted ? (
        <p>Merci pour votre message, nous reviendrons vers vous rapidement.</p>
      ) : (
        <form onSubmit={handleSubmit} aria-label="Formulaire de contact">
          <div>
            <label htmlFor="nom">Nom complet</label>
            <input
              id="nom"
              name="nom"
              type="text"
              value={formData.nom}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Adresse e-mail</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="message">Votre message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Envoyer</button>
        </form>
      )}
    </main>
  );
}

export default Contact;
