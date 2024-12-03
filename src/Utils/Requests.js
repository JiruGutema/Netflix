const API = "893b436e4ffce03ed435456374737ba5";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API}&with_networks=213`,
  fetchTopRatedMovies: `/movie/top_rated?api_key=${API}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API}&with_genres=10749`, // Fixed `with_genres-10749`
  fetchDocumentaries: `/discover/movie?api_key=${API}&with_genres=99`,
  fetchTvShow: `/tv/popular?api_key=${API}&language=en-US&page=1`, // Added `/` before `tv`
};

export default requests;
