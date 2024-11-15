import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useMovieStore = defineStore('movie', () => {
  const tmdb_apiKey = import.meta.env.VITE_TMDB_API_KEY

  let movies = ref([])

  const getTopRatedMovies = () => {
    axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=' + tmdb_apiKey +'&language=ko-KR&page=1')
    .then((response) => {
      console.log("response = ", response)
      movies.value = response.data.results
    }).catch((error) => {
      console.log("error = ", error)
    })
  }
  return { movies, getTopRatedMovies }
})
