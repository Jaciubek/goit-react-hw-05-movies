import axios from 'axios';



const API_KEY = '24d71428afc96f148d79022ebc2767a3';
const BASE_URL = 'https://api.themoviedb.org/3/';


const fetchTrendyMovies = async setMovies => {
  try {
    const response = await axios.get(
      `${BASE_URL}trending/movie/day?api_key=${API_KEY}`
    );

    return setMovies(response.data.results);
  } catch (error) {
    console.log(`${error.name}: ${error.message}`);
  }
};

const fetchMovieById = async (movieId, setMovie) => {
  try {
    const response = await axios.get(
      `${BASE_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`
    );

    return setMovie(response.data);
  } catch (error) {
    console.log(`${error.name}: ${error.message}`);
  }
};


const fetchMovieCast = async (movieId, setCast) => {
  try {
    const response = await axios.get(
      `${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
    );

    return setCast(response.data.cast);
  } catch (error) {
    console.log(`${error.name}: ${error.message}`);
  }
};

const fetchMovieByQuery = async (query, setSearchedMovies) => {
  try {
    const response = await axios.get(
      `${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}&page=1&include_adult=false`
    );
    const data = response.data.results;
    return setSearchedMovies(data);
  } catch (error) {
    console.log(`${error.name}: ${error.message}`);
  }
};


const fetchMovieReviews = async (movieId, setReviews) => {
  try {
    const response = await axios.get(
      `${BASE_URL}movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`
    );

    return setReviews(response.data.results);
  } catch (error) {
    console.log(`${error.name}: ${error.message}`);
  }
};




export {
  fetchMovieById,
  fetchTrendyMovies,
  fetchMovieCast,
  fetchMovieReviews,
  fetchMovieByQuery,
};
