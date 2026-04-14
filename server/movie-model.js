/* Task 1.1. Add your movie data here 
   and export it so it's available in server.js */

const movies = {
  "tt0468569": {
    "imdbID": "tt0468569",
    "Title": "The Dark Knight",
    "Released": "2008-07-18",
    "Runtime": 152,
    "Genres": ["Action", "Crime", "Drama"],
    "Directors": ["Christopher Nolan"],
    "Writers": ["Jonathan Nolan", "Christopher Nolan", "David S. Goyer"],
    "Actors": ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
    "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    "Metascore": 84,
    "imdbRating": 9.0
  },
  "tt0848228": {
    "imdbID": "tt0848228",
    "Title": "The Avengers",
    "Released": "2012-05-04",
    "Runtime": 143,
    "Genres": ["Action", "Sci-Fi"],
    "Directors": ["Joss Whedon"],
    "Writers": ["Joss Whedon", "Zak Penn"],
    "Actors": ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"],
    "Plot": "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
    "Poster": "https://image.tmdb.org/t/p/w300/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg",
    "Metascore": 69,
    "imdbRating": 8.0
  },
  "tt1375666": {
    "imdbID": "tt1375666",
    "Title": "Inception",
    "Released": "2010-07-16",
    "Runtime": 148,
    "Genres": ["Action", "Adventure", "Sci-Fi"],
    "Directors": ["Christopher Nolan"],
    "Writers": ["Christopher Nolan"],
    "Actors": ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"],
    "Plot": "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    "Metascore": 74,
    "imdbRating": 8.8
  }
};

module.exports = movies;