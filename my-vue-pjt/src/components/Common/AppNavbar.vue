<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav>
    <RouterLink to="/">영화조회</RouterLink> 
    <RouterLink to="/review-search">리뷰검색</RouterLink> 
    <RouterLink to="/recommended">영화추천</RouterLink>
  </nav>
</template>

