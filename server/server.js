const express = require('express');
const connectToDB = require('./config/connectToDB')
const favoritesRouter = require('./routes/favorites');
const app = express();
const dotenv = require('dotenv')

app.use(express.json());

connectToDB();

app.use('/favorites', favoritesRouter);

app.listen(3000, () => console.log('Server started'));