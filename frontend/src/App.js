import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Batiment from './pages/Batiment';        
import Artisans from './pages/Artisans';
import Services from './pages/Services';
import Fabrication from './pages/Fabrication';
import Alimentation from './pages/Alimentation';
import Contact from './pages/Contact';
import ArtisanDetail from './pages/ArtisanDetail';
import NotFound from './pages/NotFound'; // ✅ bon nom

// Pages légales
import MentionsLegales from './pages/MentionsLegales';
import DonneesPersonnelles from './pages/DonneesPersonnelles';
import Accessibilite from './pages/Accessibilite';
import Cookies from './pages/Cookies';

import artisansData from './data/artisans.json';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredArtisans = artisansData.filter((artisan) =>
    artisan.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
    artisan.spécialité.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Router>
      <Header artisans={filteredArtisans} onSearch={setSearchTerm} />

      <div className="app-container" style={{ flex: '1 0 auto' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/bâtiment"
            element={
              <Batiment
                artisans={filteredArtisans.filter(
                  (a) => a.catégorie === 'Bâtiment'
                )}
              />
            }
          />
          <Route
            path="/services"
            element={
              <Services
                artisans={filteredArtisans.filter(
                  (a) => a.catégorie === 'Services'
                )}
              />
            }
          />
          <Route
            path="/fabrication"
            element={
              <Fabrication
                artisans={filteredArtisans.filter(
                  (a) => a.catégorie === 'Fabrication'
                )}
              />
            }
          />
          <Route
            path="/alimentation"
            element={
              <Alimentation
                artisans={filteredArtisans.filter(
                  (a) => a.catégorie === 'Alimentation'
                )}
              />
            }
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/artisan/:id" element={<ArtisanDetail />} />

          {/* Pages légales */}
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="/donnees-personnelles" element={<DonneesPersonnelles />} />
          <Route path="/accessibilite" element={<Accessibilite />} />
          <Route path="/cookies" element={<Cookies />} />

          {/* ✅ Route 404 : tout en bas */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      <Footer />
    </Router>
  );
}

export default App;
