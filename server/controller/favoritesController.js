const Favorite = require('../model/Favorites');

const getAllFavorites = async (req, res) => {
    try {
        const favorites = await Favorite.find();
        res.json(favorites);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const addFavorite = async (req, res) => {
    const favorite = new Favorite({
        name: req.body.name,
        type: req.body.type,
        image: req.body.image,
    });

    try {
        const newFavorite = await favorite.save();
        res.status(201).json(newFavorite);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const deleteFavorite = async (req, res) => {
    try {
        await Favorite.findByIdAndRemove(req.params.id);
        res.json({ message: 'Favorite deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const updateFavoritesOrder = async (req, res) => {
    try {
        const { favorites } = req.body;
        // Update the order of items in the database
        for (let i = 0; i < favorites.length; i++) {
            const favorite = favorites[i];
            await Favorite.findByIdAndUpdate(favorite._id, { order: i });
        }
        res.json({ message: 'Favorites order updated successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    getAllFavorites,
    addFavorite,
    deleteFavorite,
    updateFavoritesOrder,
};
