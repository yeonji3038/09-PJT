<script setup> 
// setup: Vue 라이프 사이클(생명주기)
// setup : 최소 세팅
// Mount : DOM이 그려진 후
// Update : 화면 완성 후 데이터 변경 시
// UnMount : 다른 컴포넌트로 이동 시
import {RouterLink} from 'vue-router'

</script>

<template>
  <nav>
    <RouterLink to="/">영화조회</RouterLink> 
    <RouterLink to="/review-search">리뷰검색</RouterLink> 
    <RouterLink to="/recommended">영화추천</RouterLink>
  </nav>
</template>

