const express = require('express');
const router = express.Router();
const Favorites = require('../model/Favorites');

// Get all favorites
router.get('/', async (req, res) => {
  try {
    const favorites = await Favorites.find();
    res.json({ favorites });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new favorite
router.post('/', async (req, res) => {
  const favorite = new Favorites({
    name: req.body.name,
    image: req.body.image,
    // Add any other fields you need
  });

  try {
    const newFavorite = await favorite.save();
    res.status(201).json(newFavorite);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a favorite

// Delete a favorite

module.exports = router;
