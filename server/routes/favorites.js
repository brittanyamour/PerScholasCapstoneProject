const express = require('express');
const router = express.Router();
const Favorites = require('../model/Favorites');
const favoritesController = require('../controller/favoritesController');

// Get all favorites
router.get('/', favoritesController.getAllFavorites);

// Create a new favorite
router.post('/', favoritesController.addFavorite);

// Update favorites order
router.post('/reorder', favoritesController.updateFavoritesOrder);

// Delete a favorite
router.delete('/:id', favoritesController.deleteFavorite);


module.exports = router;
