const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const movieModel = require('./movie-model.js');

const app = express();

app.use(bodyParser.json()); 
app.use(express.static(path.join(__dirname, 'files')));

// GET ALL MOVIES
app.get('/movies', function (req, res) {
  res.json(Object.values(movieModel));
});

// Task 2.1: GET SINGLE MOVIE
app.get('/movies/:imdbID', function (req, res) {
  const id = req.params.imdbID; // Liest die ID aus der URL
  const movie = movieModel[id]; // Sucht im Objekt aus movie-model.js

  if (movie) {
    res.json(movie); // Gefunden -> Daten senden
  } else {
    res.sendStatus(404); // Nicht gefunden -> Fehler senden
  }
});

/* Task 3 (Speichern) folgt später */

app.listen(3000);
console.log("Server now listening on http://localhost:3000/");