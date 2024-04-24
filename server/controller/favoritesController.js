const Pokemon = require('../models/Pokemon');

const getAllFavorites = async (req, res) => {
    try {
        const favorites = await Pokemon.find();
        res.json(favorites);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const addFavorite = async (req, res) => {
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
};

const deleteFavorite = async (req, res) => {
    try {
        await Pokemon.findByIdAndRemove(req.params.id);
        res.json({ message: 'Favorite deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export default {
    getAllFavorites,
    addFavorite,
    deleteFavorite,
}