//import env variables
if (process.env.NODE_ENV != 'production') {
    require("dotenv").config();    
}

//import mongoose
const mongoose = require('mongoose');

//function to load DB
async function connectToDB() {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log('Connected to MongoDB');
    } catch (err) {
        console.log(err)
    }
}


module.exports = connectToDB