const mongoose = require('mongoose');

const mongoUrl = 'mongodb://0.0.0.0:27017/users';


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