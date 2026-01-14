const letterContainer = document.getElementById("letterButtons");
const alphabet = "0-9ABCDEFGHIJKLMNOPQRSTUVWXYZ";
for (let letter of alphabet) {
  let btn = document.createElement("button");
  btn.innerText = letter;
  btn.onclick = () => filterByLetter(letter);
  letterContainer.appendChild(btn);
}

function filterByLetter(letter) {
  const shows = document.querySelectorAll(".col");
  shows.forEach((show) => {
    const name = show.dataset.name.toUpperCase();
    show.classList.toggle("hidden", !name.startsWith(letter));
  });
}
e
function filterByGenre(genre) {
  const shows = document.querySelectorAll(".col");
  shows.forEach((show) => {
    const showGenre = show.dataset.genre;
    show.classList.toggle("hidden", genre !== "All" && showGenre !== genre);
  });
}
