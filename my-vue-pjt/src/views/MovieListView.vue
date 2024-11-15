<script setup>
import { useMovieStore } from '@/stores/movie'
import { useRouter, useRoute } from 'vue-router'
import { onMounted } from 'vue'

const store = useMovieStore()
const router = useRouter()

onMounted(() => {
  store.getTopRatedMovies()
})
</script>

<template>
  <h1>인기 영화</h1>
  <div class="movie-list">
    <div
      v-for="movie in store.movies"
      :key="movie.id"
      class="movie-card"
      >
      <div class="movie-details">
        <h3>{{ movie.title }}</h3>
      </div>
    </div>

  </div>

</template>

<style scoped>

</style>