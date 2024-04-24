

const mongoose = require('mongoose');

const favoriteSchema = new mongoose.Schema({
  name: String,
  type: String,
  image: String,
  // Add any other fields you need
});

const Favorite = mongoose.model('Favorite', favoriteSchema);

module.exports = Favorites;
