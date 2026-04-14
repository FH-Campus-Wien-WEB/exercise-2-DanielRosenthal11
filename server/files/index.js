window.onload = function () {
  const xhr = new XMLHttpRequest();
  xhr.onload = function () {
    const bodyElement = document.querySelector("body");
    if (xhr.status == 200) {
      const movies = JSON.parse(xhr.responseText);
      
      // Seite leeren und Überschrift setzen
      bodyElement.innerHTML = "<h1>Movies!</h1>";

      for (const movie of movies) {
        /* Task 1.3. Render movies and include an Edit button */
        const article = document.createElement("article");
        
        // Wichtig: ID setzen für spätere Identifikation
        article.id = movie.imdbID;

        // Header mit Titel und Ratings
        const header = document.createElement("header");
        const title = document.createElement("h2");
        title.textContent = movie.Title;
        const ratings = document.createElement("p");
        ratings.innerHTML = `<strong>IMDb:</strong> ${movie.imdbRating} | <strong>Metascore:</strong> ${movie.Metascore}`;
        header.append(title, ratings);

        // Body mit Poster und Info
        const movieBody = document.createElement("div");
        movieBody.style.display = "flex";
        movieBody.style.gap = "20px";

        const poster = document.createElement("img");
        poster.src = movie.Poster;
        poster.style.maxWidth = "150px";

        const info = document.createElement("div");
        const genreTags = movie.Genres.map(g => `<span class="genre">${g}</span>`).join(" ");
        info.innerHTML = `<p>${movie.Released} | ${movie.Runtime} min</p><p>${genreTags}</p><blockquote>${movie.Plot}</blockquote>`;

        // Der Edit Button (noch ohne Funktion)
        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        
        info.appendChild(editBtn);
        movieBody.append(poster, info);
        article.append(header, movieBody);
        bodyElement.append(article);
      }

    } else {
      bodyElement.append(
        "Daten konnten nicht geladen werden, Status " +
          xhr.status +
          " - " +
          xhr.statusText
      );
    }
  };
  xhr.open("GET", "/movies");
  xhr.send();
};