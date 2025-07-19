const express = require('express');
const router = express.Router();
const Artisan = require('../models/artisan'); // Assure-toi que ce modèle est correct et exporté

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
    const { nom, métier } = req.body;
    if (!nom || !métier) {
      return res.status(400).json({ error: 'Nom et métier sont requis' });
    }
    const newArtisan = await Artisan.create({ nom, métier });
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
    const { nom, métier } = req.body;

    const artisan = await Artisan.findByPk(id);
    if (!artisan) {
      return res.status(404).json({ error: 'Artisan non trouvé' });
    }

    if (nom !== undefined) artisan.nom = nom;
    if (métier !== undefined) artisan.métier = métier;

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
