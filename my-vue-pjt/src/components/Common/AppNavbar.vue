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

<style scoped>
nav {
  position: fixed;  /* 네비게이션 바를 화면에 고정 */
  top: 0;           /* 상단에 배치 */
  left: 0;          /* 왼쪽에 배치 */
  width: 100%;      /* 가로 너비를 100%로 설정 */
  background-color: white;  /* 배경색을 설정하여 글씨가 잘 보이도록 */
  padding: 10px 20px;       /* 여백을 설정하여 보기 좋게 */
  z-index: 1000;    /* 다른 요소 위에 표시되도록 설정 */
  box-shadow: 0 4px 2px -2px gray; /* 그림자 효과로 구분감 추가 */
}

nav a {
  margin-right: 20px; /* 링크 간 간격 */
}
</style>
