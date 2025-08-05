const mongoose = require('mongoose');
require('dotenv').config();
const mongoUrl = process.env.Mongo_Url;

mongoose.connect(mongoUrl);

const db = mongoose.connection;

db.on('connected', () => {
    console.log("MongoDb is connected ");
});

db.on('error', (err) => {
    console.log("Error in MongoDb", err);
});

db.on('Disconnected', () => {
    console.log("MongoDb is connected ");
});

module.exports = db;