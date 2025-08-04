const express = require('express');
const db = require('./db.js')
const userSchema = require('./models/userSchema.js')

const app = express();


app.listen(3000, () => {
    console.log("server is running on port 3000");
});

app.get('/', function(req,res) {
    res.send("welcome to the page");
});
