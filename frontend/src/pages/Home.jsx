import React, { useEffect, useState } from "react";
import StarRating from '../components/StarRating';

function Home() {
  const [topArtisans, setTopArtisans] = useState([]);

  useEffect(() => {
    fetch("/artisans.json")
      .then((res) => res.json())
      .then((data) => {
        const top = data.filter((artisan) => artisan.top === true);
        setTopArtisans(top);
      })
      .catch((error) =>
        console.error("Erreur lors du chargement des artisans :", error)
      );
  }, []);

  return (
    <main className="container py-5">
      <header className="text-center mb-4">
        <h1 className="display-4 fw-bold">
          Bienvenue sur{" "}
          <span className="text-primary">Trouve ton artisan&nbsp;!</span>
        </h1>
      </header>

      <section className="text-center mb-5">
        <p className="fs-4">
          Trouvez facilement un <strong>artisan qualifié</strong> dans votre
          région pour <strong>tous vos travaux</strong>.
        </p>
        <p className="fs-4">
          Particulier ou professionnel, notre plateforme vous met en relation
          avec <strong>les meilleurs artisans locaux</strong>.
        </p>
      </section>

      {/* A) Étapes */}
      <section className="mb-5">
        <h2 className="text-center text-primary mb-4">
          Comment trouver mon artisan&nbsp;?
        </h2>
        <div className="row text-center">
          {[1, 2, 3, 4].map((num, index) => {
            const textes = [
              "Choisir la catégorie d'artisanat dans le menu",
              "Choisir un artisan",
              "Le contacter via le formulaire de contact",
              "Une réponse vous sera apportée sous 48h",
            ];
            return (
              <div className="col-md-3 mb-3" key={index}>
                <div className="card h-100 shadow rounded border-0">
                  <div className="card-body">
                    <h3 className="fw-bold" style={{ color: "#82b864" }}>
                      {num}
                    </h3>
                    <p className="mb-0">{textes[index]}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* B) Artisans du mois */}
      <section>
        <h2 className="text-center text-primary mb-4">
          Les trois artisans du mois
        </h2>
        <div className="row">
          {topArtisans.map((artisan, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card h-100 shadow">
                <div className="card-body">
                  <h5 className="card-title">{artisan.nom}</h5>
                  <p className="card-text">
                    <strong>Spécialité :</strong> {artisan["spécialité"]}
                    <br />
                    <strong>Localisation :</strong> {artisan.ville}
                    <br />
                    <strong>Note :</strong>{" "}
                    <StarRating rating={artisan.note} uniqueId={`home-${artisan.id}`} />{" "}
                    <span className="artisan-note-number">({artisan.note}/5)</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;
