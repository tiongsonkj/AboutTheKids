const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// CONNECTING TO ROUTES
// const routes = require("./routes");
const mentors = require('./routes/api/mentors');

// initializing express
const app = express();

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/build"));

// mLab Config
const db = require('./config/keys').mongoURI;

// connect to mongolab mongodb w/mongoose
mongoose
    .connect(db)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

// USE ROUTES
// both API and view route
// app.use(routes);
app.use('/api/mentors', mentors);

const PORT = process.env.PORT || 8000;

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});