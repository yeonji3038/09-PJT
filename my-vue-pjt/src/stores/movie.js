import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useMovieStore = defineStore('movie', () => {
  const tmdb_apiKey = import.meta.env.VITE_TMDB_API_KEY

  let top_rated_movies = ref([])

  const getTopRatedMovies = () => {
    axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=' + tmdb_apiKey +'&language=en-US&page=1')
    .then((response) => {
      console.log("response = ", response)
      top_rated_movies.value = response.data.results
    }).catch((error) => {
      console.log("error = ", error)
    })
  }
  return { top_rated_movies, getTopRatedMovies }
})
