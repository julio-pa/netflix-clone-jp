const API_KEY = "d524a026440aedc43329a7b537e95eaa";

//Endpoints
// Cada endpoint es un genero diferente
const request = {
  fetchTrending: `trending/all/week?api_key=${API_KEY}`,
  fetchNetflixOriginals:`discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_networks=213`,
  fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries:`/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default request;