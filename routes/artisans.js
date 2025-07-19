const express = require('express');
const router = express.Router();
const Artisan = require('../models/artisan');

console.log('routes/artisans.js chargé');

// GET /api/artisans - liste tous les artisans
router.get('/', async (req, res) => {
  try {
    const artisans = await Artisan.findAll();
    res.json(artisans);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

// POST /api/artisans - crée un nouvel artisan
router.post('/', async (req, res) => {
  try {
    const { nom, specialite, note, ville, a_propos, email, site_web, categorie, top } = req.body;

    if (!nom || !specialite || !note || !ville || !email || !categorie) {
      return res.status(400).json({ error: 'Champs requis manquants' });
    }

    const newArtisan = await Artisan.create({
      nom,
      specialite,
      note,
      ville,
      a_propos,
      email,
      site_web,
      categorie,
      top: top || false,
    });

    res.status(201).json(newArtisan);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

// PUT /api/artisans/:id - modifie un artisan par son id
router.put('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const { nom, specialite, note, ville, a_propos, email, site_web, categorie, top } = req.body;

    const artisan = await Artisan.findByPk(id);
    if (!artisan) {
      return res.status(404).json({ error: 'Artisan non trouvé' });
    }

    if (nom !== undefined) artisan.nom = nom;
    if (specialite !== undefined) artisan.specialite = specialite;
    if (note !== undefined) artisan.note = note;
    if (ville !== undefined) artisan.ville = ville;
    if (a_propos !== undefined) artisan.a_propos = a_propos;
    if (email !== undefined) artisan.email = email;
    if (site_web !== undefined) artisan.site_web = site_web;
    if (categorie !== undefined) artisan.categorie = categorie;
    if (top !== undefined) artisan.top = top;

    await artisan.save();
    res.json(artisan);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

// DELETE /api/artisans/:id - supprime un artisan par son id
router.delete('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const artisan = await Artisan.findByPk(id);
    if (!artisan) {
      return res.status(404).json({ error: 'Artisan non trouvé' });
    }

    await artisan.destroy();
    res.json({ message: 'Artisan supprimé avec succès' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

module.exports = router;
