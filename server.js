const express = require("express");
const db = require("./db.js");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const passport = require('./auth.js')
require('dotenv').config();

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("server is running on port", PORT);
});

app.get("/", function (req, res) {
  res.send("welcome to the page");
});


app.use(passport.initialize());


const userRoutes = require('./routes/userRoutes.js');
const adminRoutes = require('./routes/adminRoutes.js');
app.use('/user', userRoutes);
app.use('/admin', adminRoutes);