<template>
  <div
      v-for="movie in store.movies"
      :key="movie.id"
      class="movie-card"
    >
      <img :src="movie.image" alt="" class="movie-image">
      <div class="movie-details">
        <h3>{{ movie.title }}</h3>
        <p>{{ movie.overview }}</p>
      </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
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