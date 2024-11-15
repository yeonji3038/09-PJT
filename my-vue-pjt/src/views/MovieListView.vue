<script setup>
import { useMovieStore } from '@/stores/movie'
import { useRouter } from 'vue-router'
import { onMounted } from 'vue'

const store = useMovieStore();
const router = useRouter();

// API 로 데이터를 다운로드 받아야한다.
// setup 에서 호출하는 게 맞을까 ?
// 무슨 문제점이 발생할 수 있을까 ?
// -> DOM 입장에서 없는 데이터로 화면을 그리려고
//    시도 할 수 있다.

// setup: DOM이 그려지기 전에 호출
// 데이터 다운로드는 DOM 이 그려지고
//    난 후에 가져오는 걸 권장
onMounted(() => {
  store.getTopRatedMovies();
})

// const goDetail = (movie) => {
//   router.push(`/${movie.id}`)
// }

// const addToCart = (movie) => {
//   store.addToCart(movie);
//   router.push('/cart')
// }
</script>

<template>
  <div class="movie-list">
    <div
      v-for="movie in store.movies"
      :key="movie.id"
      class="movie-card"
    >
      <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"  alt="" class="movie-image">
      <div class="movie-details">
        <h3>{{ movie.title }}</h3>
        <p>{{ movie.overview }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.movie-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.movie-card {
  border: 1px solid #000;
  width: 200px;
  padding: 15px;
}

.movie-image {
  width: 100%;
}

.movie-details {
  text-align: center;
}
</style>