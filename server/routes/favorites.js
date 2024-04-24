const express = require('express');
const router = express.Router();
// const Pokemon = require('../server/models/pokemon.js');

// Get all favorites
router.get('/', async (req, res) => {
    try {
        const favorites = await Pokemon.find();
        res.json(favorites);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Add a favorite
router.post('/', async (req, res) => {
    const pokemon = new Pokemon({
        name: req.body.name,
        type: req.body.type,
        imageUrl: req.body.imageUrl,
    });

    try {
        const newPokemon = await pokemon.save();
        res.status(201).json(newPokemon);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete a favorite
router.delete('/:id', async (req, res) => {
    try {
        await Pokemon.findByIdAndRemove(req.params.id);
        res.json({ message: 'Favorite deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;