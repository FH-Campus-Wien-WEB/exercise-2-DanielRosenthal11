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

        const poster = document.createElement("img");
        poster.src = movie.Poster;
        poster.style.maxWidth = "150px";

        const info = document.createElement("p");
        info.innerHTML = `Rating: ${movie.imdbRating} | Released: ${movie.Released}`;

        // Task 2.2: Edit Button Navigation
        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.onclick = function() {
            // Schickt uns zur Edit-Seite und hängt die ID an
            location.href = "edit.html?imdbID=" + movie.imdbID;
        };

        article.append(title, poster, info, editBtn);
        bodyElement.append(article);
      }
    }
  };
  xhr.open("GET", "/movies");
  xhr.send();
};