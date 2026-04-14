const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const movieModel = require('./movie-model.js');

const app = express();

app.use(bodyParser.json()); 

// Statische Dateien (HTML, CSS, JS) aus dem Ordner 'files' servieren
app.use(express.static(path.join(__dirname, 'files')));

// Task 1.2: Alle Filme als Array zurückgeben
app.get('/movies', function (req, res) {
  const moviesArray = Object.values(movieModel);
  res.json(moviesArray); // Das hier schickt die Daten an den Browser!
});

// Task 2.1: Platzhalter für einen einzelnen Film (noch auf 404)
app.get('/movies/:imdbID', function (req, res) {
  res.sendStatus(404);
});

app.listen(3000);

console.log("Server now listening on http://localhost:3000/");