const addModal = document.getElementById("add-modal");
// const addModal = document.querySelector('#add-modal');
// const addModal = document.body.children[1];
const startAddMovieButtonEl = document.getElementById("add");
// const startAddMovieButtonEl = document.querySelector('header').lastElementChild;
const cancelAddMovieButton = addModal.querySelector(".btn--passive");
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
const backdropEl = document.body.children[0];
// const backdropEl = document.getElementById('backdrop');
// const backdropEl = document.body.firstElementChild;
const userInputs = addModal.querySelectorAll("input");
// const userInputs = addModal.getElementByTagName('input');
const entryTextSection = document.getElementById('entry-text');
const movies = [];

const updateUI = () => {
  if (movies.length === 0) {
    entryTextSection.style.display = 'block';
  } else {
    entryTextSection.style.display = 'none';
  }
};

const renderNewMovieElement = (id, title, imageUrl, rating) => {
  const newMovieElement = document.createElement('li');
  newMovieElement.className = 'movie-element';
  newMovieElement.innerHTML = `
    <div class="movie-element__image>
      <img src="${imageUrl}" alt="${title}">
    </div>
    <div class="movie-element__info">
      <h2>${title}</h2>
      <p>${rating}/5 stars</p>
    </div>
  `;
  newMovieElement.addEventListener('click', deleteMovieHandler.bind(null, id));
  const listRoot = document.getElementById('movie-list');
  listRoot.append(newMovieElement);
};

const toggleMovieModal = () => {
  addModal.classList.toggle("visible");
  toggleBackdrop();
};

const clearMovieInput = () => {
  for (const userInput of userInputs){
    userInput.value = '';
  }
};

const deleteMovie = (movieId) => {
  let movieIndex = 0;
  for (const movie of movies) {
    if (movie.id === movieId) {
      break;
    }
    movieIndex++;
  }
  movies.splice(movieIndex, 1);
  const listRoot = document.getElementById('movie-list');
  listRoot.children[movieIndex].remove();
  // listRoot.removeChild(listRoot.children[movieIndex]);
}

const deleteMovieHandler = (movieId) => {
  const deleteMovieModal = document.getElementById('delete-modal');
  deleteMovieModal.classList.add('visible');
  // if () {
  //   deleteMovie(id);
  // }
};

const cancelAddMovieHandler = () => {
  clearMovieInput();
  toggleMovieModal();
};

const toggleBackdrop = function () {
  backdropEl.classList.toggle("visible");
};

const backdropClickHandler = () => {
  toggleMovieModal();
};

const addMovieHandler = () => {
  const titleValue = userInputs[0].value;
  const imageUrlValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;

  if (
    titleValue.trim() === "" ||
    imageUrlValue.trim === "" ||
    ratingValue.trim() === "" ||
    ratingValue < 1 ||
    +ratingValue < 1 ||
    +ratingValue > 5
  ) {
    alert('Please enter valid value');
    return;
  }
  const newMovie = {
    id: Math.random().toString(),
    title: titleValue,
    image: imageUrlValue,
    rating: ratingValue
  };
  movies.push(newMovie);
  toggleMovieModal();
  clearMovieInput();
  updateUI();
  renderNewMovieElement(newMovie.id, newMovie.title, newMovie.image, newMovie.rating);
  return;
};

// startAddMovieButtonEl.addEventListener('click', () => {
//   addModal.setAttribute('class', 'modal visible');
// });
startAddMovieButtonEl.addEventListener("click", toggleMovieModal);
backdropEl.addEventListener("click", backdropClickHandler);
cancelAddMovieButton.addEventListener("click", cancelAddMovieHandler);
confirmAddMovieButton.addEventListener("click", addMovieHandler);
