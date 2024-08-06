"use strict";
const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');

const movies =[];

const renderMovies = (filter = '') => {
  const movieList = document.getElementById('movie-list');

  if(movies.length === 0){
    movieList.classList.remove('visible');
    return;
  }else{
    movieList.classList.add('visible');
  }
  movieList.innerHTML = '';

  const filteredMovies = !filter ? movies : movies.filter(movie => movie.info.title.includes(filter));


  filteredMovies.forEach((movie) => {
    const movieEl = document.createElement('li');
    // check property exists
    if ('info' in movie) {
      console.log('info exist!');
    }
    // de-structure object
    const {info, ...otherProps} = movie;
    // let text = movie.info.title + ' - ';
    // for (const key in movie.info) {
    //   if (key !== 'title'){
    //     text = text + `${key}: ${movie.info[key]}`;
    //   }
    // }
    console.log(otherProps);
    // get title in info
    // const { title: movieTitle } = info;
    // console.log(movieTitle);

    // control 'this'
    let { getFormattedTitle } = movie;
    getFormattedTitle = getFormattedTitle.bind(movie);
    let text = getFormattedTitle() + ' - ';
    for(const key in info) {
      if(key !== 'title') {
        text = text + `${key}` + `${info[key]}`;
      }
    }
    movieEl.textContent = text;
    movieList.append(movieEl);
  });
};

const addMovieHandler = () => {
  const title = document.getElementById('title').value;
  const extraName = document.getElementById('extra-name').value;
  const extraValue = document.getElementById('extra-value').value;

  if(title.trim() === '' || extraName.trim() === '' || extraValue.trim() === ''){
    return;
  }

  const newMovie = {
    info: {
      title,
      [extraName]: extraValue
    },
  id: Math.random().toString(),
  // when want to stick logic with Object
  getFormattedTitle: function() {
    console.log(this);
    return this.info.title.toUpperCase();
  }
  };

  movies.push(newMovie);
  renderMovies();
};

// arrow functions doesn't know "this", keep context.
// const searchMovieHandler = () => {
//   console.log(this); // window
//   const filterTerm = document.getElementById('filter-title').value;
//   renderMovies(filterTerm);
// };

const searchMovieHandler = function() {
  console.log(this); // button
  const filterTerm = document.getElementById('filter-title').value;
  renderMovies(filterTerm);
};

addMovieBtn.addEventListener('click', addMovieHandler);
searchBtn.addEventListener('click', searchMovieHandler);