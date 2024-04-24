const express = require('express');
const connectToDB = require('./config/connectToDB')
const favoritesRouter = require('./routes/favorites');
const app = express();
const dotenv = require('dotenv')
const cors = require('cors')

app.use(express.json());

//use cors middleware
app.use(cors())

connectToDB();

app.use('/favorites', favoritesRouter);

app.listen(3000, () => console.log('Server started'));