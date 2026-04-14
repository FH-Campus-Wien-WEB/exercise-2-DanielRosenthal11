window.onload = function () {
  const xhr = new XMLHttpRequest();
  xhr.onload = function () {
    const bodyElement = document.querySelector("body");
    if (xhr.status == 200) {
      const movies = JSON.parse(xhr.responseText);
      
      bodyElement.innerHTML = "<h1>Movies!</h1>";

      for (const movie of movies) {
        const article = document.createElement("article");
        article.id = movie.imdbID;

        const title = document.createElement("h2");
        title.textContent = movie.Title;

        const movieBody = document.createElement("div");
        movieBody.style.display = "flex";
        movieBody.style.gap = "20px";

        const poster = document.createElement("img");
        poster.src = movie.Poster;
        poster.alt = movie.Title;
        poster.style.maxWidth = "150px";
        poster.style.borderRadius = "8px";

        const info = document.createElement("div");
        
        const genreTags = movie.Genres.map(g => `<span class="genre">${g}</span>`).join(" ");

        info.innerHTML = `
            <p><strong>Rating:</strong> ${movie.imdbRating} | <strong>Released:</strong> ${movie.Released}</p>
            <p>${genreTags}</p>
            <p><strong>Director(s):</strong> ${movie.Directors.join(", ")}</p>
            <p><strong>Writer(s):</strong> ${movie.Writers.join(", ")}</p>
            <p><strong>Actors:</strong> ${movie.Actors.join(", ")}</p>
        `;

        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.onclick = function() {
            location.href = "edit.html?imdbID=" + movie.imdbID;
        };

        info.appendChild(editBtn);
        movieBody.append(poster, info);
        article.append(title, movieBody);
        bodyElement.append(article);
      }

    } else {
      bodyElement.append("Fehler beim Laden: " + xhr.status);
    }
  };
  xhr.open("GET", "/movies");
  xhr.send();
};